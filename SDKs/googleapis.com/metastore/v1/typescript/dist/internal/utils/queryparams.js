"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryParamSerializer = exports.qpMetadataKey = void 0;
var utils_1 = require("./utils");
var qs_1 = __importDefault(require("qs"));
exports.qpMetadataKey = "queryParam";
function getQueryParamSerializer(queryParams) {
    var paramsSerializer = {
        serialize: formSerializerExplode,
    };
    if (queryParams == null)
        return paramsSerializer;
    var fieldNames = Object.getOwnPropertyNames(queryParams);
    fieldNames.forEach(function (fname) {
        var qpAnn = Reflect.getMetadata(exports.qpMetadataKey, queryParams, fname);
        if (qpAnn == null)
            return { serialize: function (params) { return ""; } };
        var qpDecorator = (0, utils_1.parseParamDecorator)(qpAnn, fname, "form", true);
        if (qpDecorator == null)
            return;
        if (qpDecorator.Serialization === "json")
            paramsSerializer = {
                serialize: function (params) { return Object.keys(params).map(function (key) {
                    return "".concat(key, "=").concat(JSON.stringify(params[key]));
                }).join("&"); },
            };
        else {
            switch (qpDecorator.Style) {
                case "deepObject":
                    paramsSerializer = {
                        serialize: function (params) {
                            return qs_1.default.stringify(params);
                        },
                    };
                    break;
                case "form":
                    if (qpDecorator.Explode) {
                        paramsSerializer = {
                            serialize: formSerializerExplode,
                        };
                    }
                    else {
                        paramsSerializer = {
                            serialize: formSerializer,
                        };
                    }
                    break;
                default:
                    // go to next query parameter field, assume first implemented serializer will serialize all query parameters for this request
                    return;
            }
        }
    });
    return paramsSerializer;
}
exports.getQueryParamSerializer = getQueryParamSerializer;
function formSerializer(params) {
    var query = [];
    Object.entries(Object.assign({}, params)).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (value !== Object(value))
            query.push("".concat(key, "=").concat(value));
        else if (Array.isArray(value)) {
            var values = value.join(",");
            query.push("".concat(key, "=").concat(values));
        }
        else {
            var values = Object.entries(Object.assign({}, value))
                .map(function (_a) {
                var objKey = _a[0], objValue = _a[1];
                return "".concat(objKey, ",").concat(objValue);
            })
                .join(",");
            query.push("".concat(key, "=").concat(values));
        }
    });
    return query.join("&");
}
function formSerializerExplode(params) {
    var query = [];
    Object.entries(Object.assign({}, params)).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (value !== Object(value))
            query.push("".concat(key, "=").concat(value));
        else if (Array.isArray(value)) {
            query.push(value.map(function (aValue) { return "".concat(key, "=").concat(aValue); }).join("&"));
        }
        else
            query.push(Object.entries(Object.assign({}, value))
                .map(function (_a) {
                var objKey = _a[0], objValue = _a[1];
                return "".concat(objKey, "=").concat(objValue);
            })
                .join("&"));
    });
    return query.join("&");
}
