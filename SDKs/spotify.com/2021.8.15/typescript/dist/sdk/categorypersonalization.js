"use strict";
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
exports.CategoryPersonalization = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var CategoryPersonalization = /** @class */ (function () {
    function CategoryPersonalization(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * endpointGetUsersTopArtistsAndTracks - Get a User's Top Artists and Tracks
     *
     * Get the current user's top artists or tracks based on calculated affinity.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-top-artists-and-tracks - Find more info on the official Spotify Web API Reference
    **/
    CategoryPersonalization.prototype.endpointGetUsersTopArtistsAndTracks = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EndpointGetUsersTopArtistsAndTracksRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/me/top/{type}", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, utils.getHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get", headers: headers }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.endpointGetUsersTopArtistsAndTracks200ApplicationJSONObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                default:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.errorResponseObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    return CategoryPersonalization;
}());
exports.CategoryPersonalization = CategoryPersonalization;
