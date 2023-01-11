"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeadersFromResponse = exports.getHeadersFromRequest = exports.headerMetadataKey = void 0;
var utils_1 = require("./utils");
exports.headerMetadataKey = "header";
function getHeadersFromRequest(headerParams) {
    if (headerParams == null)
        return;
    var headers = {};
    var fieldNames = Object.getOwnPropertyNames(headerParams);
    fieldNames.forEach(function (fname) {
        var headerAnn = Reflect.getMetadata(exports.headerMetadataKey, headerParams, fname);
        if (headerAnn == null)
            return;
        var headerDecorator = (0, utils_1.parseParamDecorator)(headerAnn, fname, "simple", false);
        if (headerDecorator == null)
            return;
        var value = serializeHeader(headerParams[fname], headerDecorator.Explode);
        if (value != "")
            headers[headerDecorator.ParamName] = value;
    });
    return headers;
}
exports.getHeadersFromRequest = getHeadersFromRequest;
function getHeadersFromResponse(headers) {
    var reponseHeaders = {};
    Object.keys(headers).forEach(function (key) {
        var value = headers[key];
        if (!value)
            return;
        if (Array.isArray(value)) {
            var h_1 = [];
            value.forEach(function (val) {
                if (val) {
                    h_1.push(String(val));
                }
            });
            reponseHeaders[key] = h_1;
        }
        else {
            reponseHeaders[key] = [value];
        }
    });
    return reponseHeaders;
}
exports.getHeadersFromResponse = getHeadersFromResponse;
function serializeHeader(header, explode) {
    var headerVals = [];
    if (Array.isArray(header)) {
        header.forEach(function (val) {
            headerVals.push(String(val));
        });
    }
    else if ((0, utils_1.isStringRecord)(header) ||
        (0, utils_1.isNumberRecord)(header) ||
        (0, utils_1.isBooleanRecord)(header)) {
        Object.getOwnPropertyNames(header).forEach(function (headerKey) {
            if (explode)
                headerVals.push("".concat(headerKey, "=").concat(header[headerKey]));
            else
                headerVals.push("".concat(headerKey, ",").concat(header[headerKey]));
        });
    }
    else if (header instanceof Object) {
        Object.getOwnPropertyNames(header).forEach(function (headerKey) {
            var headerAnn = Reflect.getMetadata(exports.headerMetadataKey, header, headerKey);
            if (headerAnn == null)
                return;
            var headerDecorator = (0, utils_1.parseParamDecorator)(headerAnn, headerKey, "simple", explode);
            if (headerDecorator == null)
                return;
            var headerFieldValue = header[headerKey];
            if ((0, utils_1.isEmpty)(headerFieldValue))
                return;
            else if (explode)
                headerVals.push("".concat(headerDecorator.ParamName, "=").concat(headerFieldValue));
            else
                headerVals.push("".concat(headerDecorator.ParamName, ",").concat(headerFieldValue));
        });
    }
    else {
        return String(header);
    }
    return headerVals.join(",");
}
