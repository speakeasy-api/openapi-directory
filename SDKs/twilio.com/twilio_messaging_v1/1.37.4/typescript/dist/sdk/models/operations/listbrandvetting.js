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
exports.ListBrandVettingResponse = exports.ListBrandVettingRequest = exports.ListBrandVettingListBrandVettingResponse = exports.ListBrandVettingListBrandVettingResponseMeta = exports.ListBrandVettingSecurity = exports.ListBrandVettingQueryParams = exports.ListBrandVettingPathParams = exports.ListBrandVettingServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListBrandVettingServerList = [
    "https://messaging.twilio.com",
];
var ListBrandVettingPathParams = /** @class */ (function (_super) {
    __extends(ListBrandVettingPathParams, _super);
    function ListBrandVettingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=BrandSid" }),
        __metadata("design:type", String)
    ], ListBrandVettingPathParams.prototype, "brandSid", void 0);
    return ListBrandVettingPathParams;
}(utils_1.SpeakeasyBase));
exports.ListBrandVettingPathParams = ListBrandVettingPathParams;
var ListBrandVettingQueryParams = /** @class */ (function (_super) {
    __extends(ListBrandVettingQueryParams, _super);
    function ListBrandVettingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListBrandVettingQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=VettingProvider" }),
        __metadata("design:type", String)
    ], ListBrandVettingQueryParams.prototype, "vettingProvider", void 0);
    return ListBrandVettingQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListBrandVettingQueryParams = ListBrandVettingQueryParams;
var ListBrandVettingSecurity = /** @class */ (function (_super) {
    __extends(ListBrandVettingSecurity, _super);
    function ListBrandVettingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListBrandVettingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListBrandVettingSecurity;
}(utils_1.SpeakeasyBase));
exports.ListBrandVettingSecurity = ListBrandVettingSecurity;
var ListBrandVettingListBrandVettingResponseMeta = /** @class */ (function (_super) {
    __extends(ListBrandVettingListBrandVettingResponseMeta, _super);
    function ListBrandVettingListBrandVettingResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListBrandVettingListBrandVettingResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListBrandVettingListBrandVettingResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListBrandVettingListBrandVettingResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListBrandVettingListBrandVettingResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListBrandVettingListBrandVettingResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListBrandVettingListBrandVettingResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListBrandVettingListBrandVettingResponseMeta.prototype, "url", void 0);
    return ListBrandVettingListBrandVettingResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListBrandVettingListBrandVettingResponseMeta = ListBrandVettingListBrandVettingResponseMeta;
var ListBrandVettingListBrandVettingResponse = /** @class */ (function (_super) {
    __extends(ListBrandVettingListBrandVettingResponse, _super);
    function ListBrandVettingListBrandVettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.MessagingV1BrandRegistrationsBrandVetting }),
        __metadata("design:type", Array)
    ], ListBrandVettingListBrandVettingResponse.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListBrandVettingListBrandVettingResponseMeta)
    ], ListBrandVettingListBrandVettingResponse.prototype, "meta", void 0);
    return ListBrandVettingListBrandVettingResponse;
}(utils_1.SpeakeasyBase));
exports.ListBrandVettingListBrandVettingResponse = ListBrandVettingListBrandVettingResponse;
var ListBrandVettingRequest = /** @class */ (function (_super) {
    __extends(ListBrandVettingRequest, _super);
    function ListBrandVettingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListBrandVettingRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBrandVettingPathParams)
    ], ListBrandVettingRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBrandVettingQueryParams)
    ], ListBrandVettingRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBrandVettingSecurity)
    ], ListBrandVettingRequest.prototype, "security", void 0);
    return ListBrandVettingRequest;
}(utils_1.SpeakeasyBase));
exports.ListBrandVettingRequest = ListBrandVettingRequest;
var ListBrandVettingResponse = /** @class */ (function (_super) {
    __extends(ListBrandVettingResponse, _super);
    function ListBrandVettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListBrandVettingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBrandVettingListBrandVettingResponse)
    ], ListBrandVettingResponse.prototype, "listBrandVettingResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListBrandVettingResponse.prototype, "statusCode", void 0);
    return ListBrandVettingResponse;
}(utils_1.SpeakeasyBase));
exports.ListBrandVettingResponse = ListBrandVettingResponse;
