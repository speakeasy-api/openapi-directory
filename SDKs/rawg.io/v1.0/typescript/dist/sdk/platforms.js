"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platforms = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
var shared = __importStar(require("./models/shared"));
var Platforms = /** @class */ (function () {
    function Platforms(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * Get a list of video game platforms.
     */
    Platforms.prototype.platformsList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PlatformsListRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/platforms";
        var client = this._defaultClient;
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.PlatformsListResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.platformsList200ApplicationJSONObject = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.PlatformsList200ApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get a list of parent platforms.
     *
     * @remarks
     * For instance, for PS2 and PS4 the “parent platform” is PlayStation.
     */
    Platforms.prototype.platformsListsParentsList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PlatformsListsParentsListRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/platforms/lists/parents";
        var client = this._defaultClient;
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.PlatformsListsParentsListResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.platformsListsParentsList200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.PlatformsListsParentsList200ApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get details of the platform.
     */
    Platforms.prototype.platformsRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PlatformsReadRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/platforms/{id}", req);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.PlatformsReadResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.platformSingle = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.PlatformSingle);
                    }
                    break;
            }
            return res;
        });
    };
    return Platforms;
}());
exports.Platforms = Platforms;
