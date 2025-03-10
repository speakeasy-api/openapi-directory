"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeQueryParams = exports.qpMetadataKey = void 0;
var utils_1 = require("./utils");
var requestbody_1 = require("./requestbody");
exports.qpMetadataKey = "queryParam";
var queryStringPrefix = "?";
function serializeQueryParams(queryParams, globals) {
    var queryStringParts = [];
    if (!queryParams)
        return queryStringParts.join("&");
    var fieldNames = "__props__" in queryParams
        ? queryParams["__props__"].map(function (prop) { return prop.key; })
        : Object.getOwnPropertyNames(queryParams);
    fieldNames.forEach(function (fname) {
        var _a, _b, _c, _d, _e;
        var requestBodyAnn = Reflect.getMetadata(requestbody_1.requestMetadataKey, queryParams, fname);
        if (requestBodyAnn)
            return;
        var qpAnn = Reflect.getMetadata(exports.qpMetadataKey, queryParams, fname);
        if (!qpAnn)
            return { serialize: function () { return ""; } };
        var qpDecorator = (0, utils_1.parseParamDecorator)(qpAnn, fname, "form", true);
        if (!qpDecorator)
            return;
        var value = queryParams[fname];
        value = (0, utils_1.populateFromGlobals)(value, fname, "queryParam", globals);
        if (qpDecorator.Serialization === "json")
            queryStringParts.push(jsonSerializer((_a = {}, _a[qpDecorator.ParamName] = value, _a)));
        else {
            switch (qpDecorator.Style) {
                case "deepObject":
                    queryStringParts.push(deepObjectSerializer((_b = {}, _b[qpDecorator.ParamName] = value, _b), qpDecorator.DateTimeFormat));
                    return;
                case "form":
                    if (!qpDecorator.Explode)
                        queryStringParts.push(formSerializer((_c = {}, _c[qpDecorator.ParamName] = value, _c), qpDecorator.DateTimeFormat));
                    else
                        queryStringParts.push(formSerializerExplode((_d = {}, _d[qpDecorator.ParamName] = value, _d), qpDecorator.DateTimeFormat));
                    return;
                default:
                    queryStringParts.push(formSerializerExplode((_e = {}, _e[qpDecorator.ParamName] = value, _e), qpDecorator.DateTimeFormat));
            }
        }
    });
    return queryStringPrefix + queryStringParts.join("&");
}
exports.serializeQueryParams = serializeQueryParams;
// TODO: Add support for disabling percent encoding for reserved characters
function jsonSerializer(params) {
    var query = [];
    Object.entries(Object.assign({}, params)).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        var values = Object.getOwnPropertyNames(value)
            .map(function (paramKey) {
            var qpAnn = Reflect.getMetadata(exports.qpMetadataKey, value, paramKey);
            var qpDecorator = (0, utils_1.parseParamDecorator)(qpAnn, paramKey, "form", true);
            if (qpDecorator == null)
                return;
            return "\"".concat(paramKey, "\":").concat(JSON.stringify((0, utils_1.convertIfDateObjectToISOString)(value[paramKey], qpDecorator.DateTimeFormat)));
        })
            .join(",");
        query.push("".concat(key, "={").concat(encodeURIComponent(values), "}"));
    });
    return query.join("&");
}
// TODO: Add support for disabling percent encoding for reserved characters
function formSerializer(params, dateTimeFormat) {
    var query = [];
    Object.entries(Object.assign({}, params)).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (!value)
            return;
        if (value !== Object(value))
            query.push("".concat(key, "=").concat((0, utils_1.encodeAndConvertPrimitiveVal)(value, dateTimeFormat)));
        else if (Array.isArray(value)) {
            var values = value
                .map(function (aValue) { return (0, utils_1.convertIfDateObjectToISOString)(aValue, dateTimeFormat); })
                .join(",");
            query.push("".concat(key, "=").concat(encodeURIComponent(values)));
        }
        else {
            var values = Object.getOwnPropertyNames(value)
                .map(function (paramKey) {
                var qpAnn = Reflect.getMetadata(exports.qpMetadataKey, value, paramKey);
                var qpDecorator = (0, utils_1.parseParamDecorator)(qpAnn, paramKey, "form", true);
                if (qpDecorator == null)
                    return;
                return "".concat(paramKey, ",").concat((0, utils_1.convertIfDateObjectToISOString)(value[paramKey], qpDecorator.DateTimeFormat));
            })
                .join(",");
            query.push("".concat(key, "=").concat(encodeURIComponent(values)));
        }
    });
    return query.join("&");
}
// TODO: Add support for disabling percent encoding for reserved characters
function formSerializerExplode(params, dateTimeFormat) {
    var query = [];
    Object.entries(Object.assign({}, params)).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (!value)
            return;
        if (value !== Object(value))
            query.push("".concat(key, "=").concat((0, utils_1.encodeAndConvertPrimitiveVal)(value, dateTimeFormat)));
        else if (Array.isArray(value)) {
            query.push(value
                .map(function (aValue) {
                return "".concat(key, "=").concat((0, utils_1.encodeAndConvertPrimitiveVal)(aValue, dateTimeFormat));
            })
                .join("&"));
        }
        else
            query.push(Object.getOwnPropertyNames(value)
                .map(function (paramKey) {
                var qpAnn = Reflect.getMetadata(exports.qpMetadataKey, value, paramKey);
                var qpDecorator = (0, utils_1.parseParamDecorator)(qpAnn, paramKey, "form", true);
                if (qpDecorator == null)
                    return;
                return "".concat(paramKey, "=").concat((0, utils_1.encodeAndConvertPrimitiveVal)(value[paramKey], qpDecorator.DateTimeFormat));
            })
                .join("&"));
    });
    return query.join("&");
}
// TODO: Add support for disabling percent encoding for reserved characters
function deepObjectSerializer(params, dateTimeFormat) {
    var query = [];
    Object.entries(Object.assign({}, params)).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (!value)
            return;
        if (value !== Object(value))
            query.push("".concat(key, "=").concat((0, utils_1.encodeAndConvertPrimitiveVal)(value, dateTimeFormat)));
        else if (Array.isArray(value)) {
            query.push(value
                .map(function (_a) {
                var objKey = _a[0], objValue = _a[1];
                return "".concat(key, "[").concat(objKey, "]=").concat((0, utils_1.encodeAndConvertPrimitiveVal)(objValue, dateTimeFormat));
            })
                .join("&"));
        }
        else
            query.push(Object.getOwnPropertyNames(value)
                .map(function (paramKey) {
                var qpAnn = Reflect.getMetadata(exports.qpMetadataKey, value, paramKey);
                var qpDecorator = (0, utils_1.parseParamDecorator)(qpAnn, paramKey, "form", true);
                if (qpDecorator == null)
                    return;
                // For deep objects, arr is wrapped inside object
                if (Array.isArray(value[paramKey]))
                    return value[paramKey]
                        .map(function (arrValue) {
                        return "".concat(key, "[").concat(paramKey, "]=").concat((0, utils_1.encodeAndConvertPrimitiveVal)(arrValue, qpDecorator.DateTimeFormat));
                    })
                        .join("&");
                return "".concat(key, "[").concat(paramKey, "]=").concat((0, utils_1.encodeAndConvertPrimitiveVal)(value[paramKey], qpDecorator.DateTimeFormat));
            })
                .join("&"));
    });
    return query.join("&");
}
