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
exports.Products = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
var shared = __importStar(require("./models/shared"));
var Products = /** @class */ (function () {
    function Products(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * Retrieve the count of existing products
     */
    Products.prototype.countAllProducts = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CountAllProductsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationUuid}/products/v2/count", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CountAllProductsSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.CountAllProductsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.productCountResponses = [];
                        var resFieldDepth = utils.getResFieldDepth(res);
                        res.productCountResponses = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ProductCountResponse, resFieldDepth);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Create a new product
     */
    Products.prototype.createProduct = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateProductRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationUuid}/products", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "productCreateRequest", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CreateProductSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var queryParams = utils.serializeQueryParams(req);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url + queryParams, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.CreateProductResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
                headers: utils.getHeadersFromResponse(httpRes.headers),
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.productResponse = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ProductResponse);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Delete a single product
     */
    Products.prototype.deleteProduct = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteProductRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationUuid}/products/{productUuid}", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteProductSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.DeleteProductResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case [204, 404].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    break;
            }
            return res;
        });
    };
    /**
     * Delete a list of products
     */
    Products.prototype.deleteProducts = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteProductsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationUuid}/products", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteProductsSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.DeleteProductsResponse({
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
     * Retrieve an aggregate of active Options in the library
     */
    Products.prototype.getAllOptions = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAllOptionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationUuid}/products/options", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetAllOptionsSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetAllOptionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.variantOptionsResponses = [];
                        var resFieldDepth = utils.getResFieldDepth(res);
                        res.variantOptionsResponses = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.VariantOptionsResponse, resFieldDepth);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Retrieve all products visible in POS
     */
    Products.prototype.getAllProductsInPos = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAllProductsInPosRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationUuid}/products", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetAllProductsInPosSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetAllProductsInPosResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.productResponses = [];
                        var resFieldDepth = utils.getResFieldDepth(res);
                        res.productResponses = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ProductResponse, resFieldDepth);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Retrieve all products visible in POS – v2
     */
    Products.prototype.getAllProductsV2 = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAllProductsV2Request(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationUuid}/products/v2", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetAllProductsV2Security(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetAllProductsV2Response({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.productResponses = [];
                        var resFieldDepth = utils.getResFieldDepth(res);
                        res.productResponses = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ProductResponse, resFieldDepth);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Retrieve a single product
     *
     * @remarks
     * Get the full product with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full product is returned, otherwise a 304 not modified will be returned with an empty body.
     */
    Products.prototype.getProduct = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetProductRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationUuid}/products/{productUuid}", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetProductSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, utils.getHeadersFromRequest(req)), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "get", headers: headers }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetProductResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
                headers: utils.getHeadersFromResponse(httpRes.headers),
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.productResponse = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ProductResponse);
                    }
                    break;
                case [304, 400, 404].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    break;
            }
            return res;
        });
    };
    /**
     * Update a single product
     *
     * @remarks
     * Updates a product entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the product is updated: otherwise a 412 (precondition failed) will be returned with an empty body.
     */
    Products.prototype.updateProduct = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateProductRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/organizations/{organizationUuid}/products/v2/{productUuid}", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "fullProductUpdateRequest", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateProductSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign(__assign({}, utils.getHeadersFromRequest(req)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "put", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.UpdateProductResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
                headers: utils.getHeadersFromResponse(httpRes.headers),
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.errorResponse = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ErrorResponse);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    break;
            }
            return res;
        });
    };
    return Products;
}());
exports.Products = Products;
