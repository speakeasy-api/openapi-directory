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
exports.Profiles = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
var Profiles = /** @class */ (function () {
    function Profiles(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * Creates a sensor alert profile for a network.
     *
     * @remarks
     * Creates a sensor alert profile for a network.
     */
    Profiles.prototype.createNetworkSensorAlertsProfile = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateNetworkSensorAlertsProfileRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/networks/{networkId}/sensor/alerts/profiles", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient || this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.CreateNetworkSensorAlertsProfileResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.createNetworkSensorAlertsProfile200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.CreateNetworkSensorAlertsProfile200ApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Create an organization-wide alert configuration
     *
     * @remarks
     * Create an organization-wide alert configuration
     */
    Profiles.prototype.createOrganizationAlertsProfile = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateOrganizationAlertsProfileRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationId}/alerts/profiles", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient || this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.CreateOrganizationAlertsProfileResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.createOrganizationAlertsProfile201ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Deletes a sensor alert profile from a network.
     *
     * @remarks
     * Deletes a sensor alert profile from a network.
     */
    Profiles.prototype.deleteNetworkSensorAlertsProfile = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteNetworkSensorAlertsProfileRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/networks/{networkId}/sensor/alerts/profiles/{id}", req);
        var client = this._securityClient || this._defaultClient;
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.DeleteNetworkSensorAlertsProfileResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        });
    };
    /**
     * Removes an organization-wide alert config
     *
     * @remarks
     * Removes an organization-wide alert config
     */
    Profiles.prototype.deleteOrganizationAlertsProfile = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteOrganizationAlertsProfileRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationId}/alerts/profiles/{alertConfigId}", req);
        var client = this._securityClient || this._defaultClient;
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.DeleteOrganizationAlertsProfileResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        });
    };
    /**
     * Show details of a sensor alert profile for a network.
     *
     * @remarks
     * Show details of a sensor alert profile for a network.
     */
    Profiles.prototype.getNetworkSensorAlertsProfile = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetNetworkSensorAlertsProfileRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/networks/{networkId}/sensor/alerts/profiles/{id}", req);
        var client = this._securityClient || this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetNetworkSensorAlertsProfileResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getNetworkSensorAlertsProfile200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.GetNetworkSensorAlertsProfile200ApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Lists all sensor alert profiles for a network.
     *
     * @remarks
     * Lists all sensor alert profiles for a network.
     */
    Profiles.prototype.getNetworkSensorAlertsProfiles = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetNetworkSensorAlertsProfilesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/networks/{networkId}/sensor/alerts/profiles", req);
        var client = this._securityClient || this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetNetworkSensorAlertsProfilesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getNetworkSensorAlertsProfiles200ApplicationJSONObjects = [];
                        var resFieldDepth = utils.getResFieldDepth(res);
                        res.getNetworkSensorAlertsProfiles200ApplicationJSONObjects =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.GetNetworkSensorAlertsProfiles200ApplicationJSON, resFieldDepth);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * List all profiles in a network
     *
     * @remarks
     * List all profiles in a network
     */
    Profiles.prototype.getNetworkSmProfiles = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetNetworkSmProfilesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/networks/{networkId}/sm/profiles", req);
        var client = this._securityClient || this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetNetworkSmProfilesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getNetworkSmProfiles200ApplicationJSONObjects = [];
                        var resFieldDepth = utils.getResFieldDepth(res);
                        res.getNetworkSmProfiles200ApplicationJSONObjects =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.GetNetworkSmProfiles200ApplicationJSON, resFieldDepth);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * List all organization-wide alert configurations
     *
     * @remarks
     * List all organization-wide alert configurations
     */
    Profiles.prototype.getOrganizationAlertsProfiles = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrganizationAlertsProfilesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationId}/alerts/profiles", req);
        var client = this._securityClient || this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetOrganizationAlertsProfilesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getOrganizationAlertsProfiles200ApplicationJSONObjects =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Return a switch profile port
     *
     * @remarks
     * Return a switch profile port
     */
    Profiles.prototype.getOrganizationConfigTemplateSwitchProfilePort = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req =
                new operations.GetOrganizationConfigTemplateSwitchProfilePortRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}", req);
        var client = this._securityClient || this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetOrganizationConfigTemplateSwitchProfilePortResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.GetOrganizationConfigTemplateSwitchProfilePort200ApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Return all the ports of a switch profile
     *
     * @remarks
     * Return all the ports of a switch profile
     */
    Profiles.prototype.getOrganizationConfigTemplateSwitchProfilePorts = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req =
                new operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports", req);
        var client = this._securityClient || this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects =
                            [];
                        var resFieldDepth = utils.getResFieldDepth(res);
                        res.getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSON, resFieldDepth);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * List the switch profiles for your switch template configuration
     *
     * @remarks
     * List the switch profiles for your switch template configuration
     */
    Profiles.prototype.getOrganizationConfigTemplateSwitchProfiles = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrganizationConfigTemplateSwitchProfilesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles", req);
        var client = this._securityClient || this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetOrganizationConfigTemplateSwitchProfilesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.GetOrganizationConfigTemplateSwitchProfiles200ApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Updates a sensor alert profile for a network.
     *
     * @remarks
     * Updates a sensor alert profile for a network.
     */
    Profiles.prototype.updateNetworkSensorAlertsProfile = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateNetworkSensorAlertsProfileRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/networks/{networkId}/sensor/alerts/profiles/{id}", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient || this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "put", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.UpdateNetworkSensorAlertsProfileResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.updateNetworkSensorAlertsProfile200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.UpdateNetworkSensorAlertsProfile200ApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Update an organization-wide alert config
     *
     * @remarks
     * Update an organization-wide alert config
     */
    Profiles.prototype.updateOrganizationAlertsProfile = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateOrganizationAlertsProfileRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationId}/alerts/profiles/{alertConfigId}", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient || this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "put", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.UpdateOrganizationAlertsProfileResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.updateOrganizationAlertsProfile200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Update a switch profile port
     *
     * @remarks
     * Update a switch profile port
     */
    Profiles.prototype.updateOrganizationConfigTemplateSwitchProfilePort = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req =
                new operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient || this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "put", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.UpdateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    return Profiles;
}());
exports.Profiles = Profiles;
