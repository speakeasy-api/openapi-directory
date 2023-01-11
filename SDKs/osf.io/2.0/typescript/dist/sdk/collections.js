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
exports.Collections = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var Collections = /** @class */ (function () {
    function Collections(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * collectionsAddMetadata - Add Metadata or Subjects to a Entitiy in a Collection
     *
     * List of user created metadata for entities within a collection.
     * #### Permissions
     * To edit this collection a user must have collections write permissions
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsAddMetadata = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsAddMetadataRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/collected_metadata/", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsCollectedMetadata - Retrieve subject data for a specific piece of metadata info for a collection
     *
     *
     * #### Permissions
     * In order to view these subject it must be a public collection or a user must have read permissions for collection.
     *
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsCollectedMetadata = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsCollectedMetadataRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}/subjects/", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsCreate - Create a Collection
     *
     * Retrieves a list collections, either public or related to the user
     * #### Permissions
     * Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
     *
     * Comments on private nodes are only visible to contributors and administrators on the parent node.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsCreate = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsCreateRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/collections/";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsDelete - Delete a Collection
     *
     * Deletes a collection, if the user has appropriate permissions.
     * #### Permissions
     * Users must have write permissions on a collection in order to delete it
     * #### Returns
     * Nothing is returned in the body
    **/
    Collections.prototype.collectionsDelete = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsDeleteRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsDetail - Retrieve a Collection
     *
     * Retrieves a collection, if the user has appropriate permissions.
     *
     * #### Permissions
     * Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsDetail = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsDetailRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsLinkedNodesList - List All Linked Nodes for a Collection
     *
     * List of all nodes linked to the given collection.
     * #### Permissions
     * This returns all public nodes associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsLinkedNodesList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsLinkedNodesListRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/linked_nodes", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsLinkedNodesRelationships - Link Nodes to Collection
     *
     * This endpoint allow users to a add a node to a collection by issuing a POST request.
     * #### Permissions
     * This returns all public nodes associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsLinkedNodesRelationships = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsLinkedNodesRelationshipsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/linked_nodes/relationships/", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsLinkedNodesRelationshipsCreate - Give a Sparse List of Node Ids
     *
     * List of all the node ids linked to the given collection.
     * #### Permissions
     * This returns all public nodes associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsLinkedNodesRelationshipsCreate = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsLinkedNodesRelationshipsCreateRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/linked_nodes/relationships/", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsLinkedNodesRelationshipsDelete - Remove Nodes From Collection
     *
     *
     * This removes associated nodes from a collection
     * #### Permissions
     * Any user with write permissions on this collection should be to remove nodes from this collection.
     * #### Returns
     * Nothing in the response body.
    **/
    Collections.prototype.collectionsLinkedNodesRelationshipsDelete = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsLinkedNodesRelationshipsDeleteRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/linked_nodes/relationships/", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "delete", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsLinkedPreprintsList - List All Linked Preprints for a Collection
     *
     * List of all preprints linked to the given collection.
     * #### Permissions
     * This returns all public preprints associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsLinkedPreprintsList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsLinkedPreprintsListRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/linked_preprints/", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsLinkedRegistrationsList - List All Linked Registrations for a Collection
     *
     * List of all registrations linked to the given collection.
     * #### Permissions
     * This returns all public registrations associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsLinkedRegistrationsList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsLinkedRegistrationsListRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/linked_registrations/", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsLinkedRegistrationsRelationships - Link Registrations to Collection
     *
     * This endpoint allow users to a add a registration to a collection by issuing a POST request.
     * #### Permissions
     * This returns all public registrations associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsLinkedRegistrationsRelationships = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsLinkedRegistrationsRelationshipsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/linked_registrations/relationships/", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsLinkedRegistrationsRelationshipsCreate - Give a Sparse List of Registrations Ids
     *
     * List of all the registration ids linked to the given collection.
     * #### Permissions
     * This returns all public registrations associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsLinkedRegistrationsRelationshipsCreate = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsLinkedRegistrationsRelationshipsCreateRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/linked_registrations/relationships/", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsLinkedRegistrationsRelationshipsDelete - Remove Registrations From Collection
     *
     *
     * This removes associated registrations from a collection
     * #### Permissions
     * Any user with write permissions on this collection should be to remove registrations from this collection.
     * #### Returns
     * Nothing in the response body.
    **/
    Collections.prototype.collectionsLinkedRegistrationsRelationshipsDelete = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsLinkedRegistrationsRelationshipsDeleteRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/linked_registrations/relationships/", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "delete", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsList - List all Collections
     *
     * Retrieves a list collections, either public or related to the user
     * #### Permissions
     * Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
     *
     * Comments on private nodes are only visible to contributors and administrators on the parent node.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsList = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/collections/";
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsMetadataDelete - Delete Collection Metadata from entitiy
     *
     *
     * #### Permissions
     * Only a user with collection admin permissions can delete collected metadata
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsMetadataDelete = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsMetadataDeleteRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsMetadataDetail - Add Metadata or Subjects to an Entity in a Collection
     *
     * List of user created metadata for entities within a collection.
     * #### Permissions
     * To edit this collection a user must have collections write permissions
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsMetadataDetail = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsMetadataDetailRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsMetadataRegistrationsDetail - Retrieve Specific Metadata for a Collection
     *
     *
     * #### Permissions
     * In order to view this metadata it must be public or a user must have read permissions for collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsMetadataRegistrationsDetail = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsMetadataRegistrationsDetailRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsMetadataRegistrationsList - Retrieve a list of collected metadata for a collection
     *
     * List of user created metadata for entities within a collection.
     * #### Permissions
     * In order to view this metadata it must be public or a user must have read permissions for collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsMetadataRegistrationsList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsMetadataRegistrationsListRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/collected_metadata/", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsMetadataSubjectsRelationships - Retrieve subject metadata for a specific piece of metadata in a collection
     *
     *
     * #### Permissions
     * This is public for a logged out user when an entity is public.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsMetadataSubjectsRelationships = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsMetadataSubjectsRelationshipsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}/relationships/subjects/", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * collectionsMetadataSubjectsRelationshipsUpdate - Update subjects for a specific piece of metadata in a collection
     *
     *
     * #### Permissions
     * This is editable for a user with a write permission for this collection.
     *
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    Collections.prototype.collectionsMetadataSubjectsRelationshipsUpdate = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsMetadataSubjectsRelationshipsUpdateRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}/relationships/subjects/", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    break;
            }
            return res;
        });
    };
    return Collections;
}());
exports.Collections = Collections;
