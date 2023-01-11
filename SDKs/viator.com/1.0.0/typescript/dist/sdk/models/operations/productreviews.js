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
exports.ProductReviewsResponse = exports.ProductReviewsRequest = exports.ProductReviews200ApplicationJson = exports.ProductReviewsHeaders = exports.ProductReviewsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ProductReviewsQueryParams = /** @class */ (function (_super) {
    __extends(ProductReviewsQueryParams, _super);
    function ProductReviewsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=code" }),
        __metadata("design:type", String)
    ], ProductReviewsQueryParams.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=showUnavailable" }),
        __metadata("design:type", Boolean)
    ], ProductReviewsQueryParams.prototype, "showUnavailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], ProductReviewsQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=topX" }),
        __metadata("design:type", String)
    ], ProductReviewsQueryParams.prototype, "topX", void 0);
    return ProductReviewsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ProductReviewsQueryParams = ProductReviewsQueryParams;
var ProductReviewsHeaders = /** @class */ (function (_super) {
    __extends(ProductReviewsHeaders, _super);
    function ProductReviewsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], ProductReviewsHeaders.prototype, "acceptLanguage", void 0);
    return ProductReviewsHeaders;
}(utils_1.SpeakeasyBase));
exports.ProductReviewsHeaders = ProductReviewsHeaders;
var ProductReviews200ApplicationJson = /** @class */ (function (_super) {
    __extends(ProductReviews200ApplicationJson, _super);
    function ProductReviews200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.ReviewObject }),
        __metadata("design:type", Array)
    ], ProductReviews200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], ProductReviews200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], ProductReviews200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], ProductReviews200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], ProductReviews200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], ProductReviews200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], ProductReviews200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], ProductReviews200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extraInfo" }),
        __metadata("design:type", Object)
    ], ProductReviews200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extraObject" }),
        __metadata("design:type", Object)
    ], ProductReviews200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], ProductReviews200ApplicationJson.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], ProductReviews200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], ProductReviews200ApplicationJson.prototype, "vmid", void 0);
    return ProductReviews200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ProductReviews200ApplicationJson = ProductReviews200ApplicationJson;
var ProductReviewsRequest = /** @class */ (function (_super) {
    __extends(ProductReviewsRequest, _super);
    function ProductReviewsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProductReviewsQueryParams)
    ], ProductReviewsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProductReviewsHeaders)
    ], ProductReviewsRequest.prototype, "headers", void 0);
    return ProductReviewsRequest;
}(utils_1.SpeakeasyBase));
exports.ProductReviewsRequest = ProductReviewsRequest;
var ProductReviewsResponse = /** @class */ (function (_super) {
    __extends(ProductReviewsResponse, _super);
    function ProductReviewsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProductReviewsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ProductReviewsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProductReviews200ApplicationJson)
    ], ProductReviewsResponse.prototype, "productReviews200ApplicationJSONObject", void 0);
    return ProductReviewsResponse;
}(utils_1.SpeakeasyBase));
exports.ProductReviewsResponse = ProductReviewsResponse;
