"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFreetextResponse = exports.SearchFreetextRequest = exports.SearchFreetext200ApplicationJson = exports.SearchFreetextRequestBody = exports.SearchFreetextRequestBodySearchTypesEnum = exports.SearchFreetextHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SearchFreetextHeaders = /** @class */ (function (_super) {
    __extends(SearchFreetextHeaders, _super);
    function SearchFreetextHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], SearchFreetextHeaders.prototype, "acceptLanguage", void 0);
    return SearchFreetextHeaders;
}(utils_1.SpeakeasyBase));
exports.SearchFreetextHeaders = SearchFreetextHeaders;
var SearchFreetextRequestBodySearchTypesEnum;
(function (SearchFreetextRequestBodySearchTypesEnum) {
    SearchFreetextRequestBodySearchTypesEnum["Product"] = "PRODUCT";
    SearchFreetextRequestBodySearchTypesEnum["Destination"] = "DESTINATION";
    SearchFreetextRequestBodySearchTypesEnum["Attraction"] = "ATTRACTION";
    SearchFreetextRequestBodySearchTypesEnum["Recommendation"] = "RECOMMENDATION";
})(SearchFreetextRequestBodySearchTypesEnum = exports.SearchFreetextRequestBodySearchTypesEnum || (exports.SearchFreetextRequestBodySearchTypesEnum = {}));
var SearchFreetextRequestBody = /** @class */ (function (_super) {
    __extends(SearchFreetextRequestBody, _super);
    function SearchFreetextRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], SearchFreetextRequestBody.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destId" }),
        __metadata("design:type", Number)
    ], SearchFreetextRequestBody.prototype, "destId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=searchTypes" }),
        __metadata("design:type", Array)
    ], SearchFreetextRequestBody.prototype, "searchTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sortOrder" }),
        __metadata("design:type", String)
    ], SearchFreetextRequestBody.prototype, "sortOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], SearchFreetextRequestBody.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topX" }),
        __metadata("design:type", String)
    ], SearchFreetextRequestBody.prototype, "topX", void 0);
    return SearchFreetextRequestBody;
}(utils_1.SpeakeasyBase));
exports.SearchFreetextRequestBody = SearchFreetextRequestBody;
var SearchFreetext200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchFreetext200ApplicationJson, _super);
    function SearchFreetext200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.SearchFreetextResponse }),
        __metadata("design:type", Array)
    ], SearchFreetext200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], SearchFreetext200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], SearchFreetext200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], SearchFreetext200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], SearchFreetext200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], SearchFreetext200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], SearchFreetext200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], SearchFreetext200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extraInfo" }),
        __metadata("design:type", Object)
    ], SearchFreetext200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extraObject" }),
        __metadata("design:type", Object)
    ], SearchFreetext200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], SearchFreetext200ApplicationJson.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], SearchFreetext200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], SearchFreetext200ApplicationJson.prototype, "vmid", void 0);
    return SearchFreetext200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SearchFreetext200ApplicationJson = SearchFreetext200ApplicationJson;
var SearchFreetextRequest = /** @class */ (function (_super) {
    __extends(SearchFreetextRequest, _super);
    function SearchFreetextRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchFreetextHeaders)
    ], SearchFreetextRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SearchFreetextRequestBody)
    ], SearchFreetextRequest.prototype, "request", void 0);
    return SearchFreetextRequest;
}(utils_1.SpeakeasyBase));
exports.SearchFreetextRequest = SearchFreetextRequest;
var SearchFreetextResponse = /** @class */ (function (_super) {
    __extends(SearchFreetextResponse, _super);
    function SearchFreetextResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SearchFreetextResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SearchFreetextResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchFreetext200ApplicationJson)
    ], SearchFreetextResponse.prototype, "searchFreetext200ApplicationJSONObject", void 0);
    return SearchFreetextResponse;
}(utils_1.SpeakeasyBase));
exports.SearchFreetextResponse = SearchFreetextResponse;
