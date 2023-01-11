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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCustomGatewayRefundOwnershipIdResponse = exports.PostCustomGatewayRefundOwnershipIdRequest = exports.PostCustomGatewayRefundOwnershipIdQueryParams = exports.PostCustomGatewayRefundOwnershipIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostCustomGatewayRefundOwnershipIdPathParams = /** @class */ (function (_super) {
    __extends(PostCustomGatewayRefundOwnershipIdPathParams, _super);
    function PostCustomGatewayRefundOwnershipIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ownershipId" }),
        __metadata("design:type", String)
    ], PostCustomGatewayRefundOwnershipIdPathParams.prototype, "ownershipId", void 0);
    return PostCustomGatewayRefundOwnershipIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PostCustomGatewayRefundOwnershipIdPathParams = PostCustomGatewayRefundOwnershipIdPathParams;
var PostCustomGatewayRefundOwnershipIdQueryParams = /** @class */ (function (_super) {
    __extends(PostCustomGatewayRefundOwnershipIdQueryParams, _super);
    function PostCustomGatewayRefundOwnershipIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=amount" }),
        __metadata("design:type", Number)
    ], PostCustomGatewayRefundOwnershipIdQueryParams.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=customData" }),
        __metadata("design:type", String)
    ], PostCustomGatewayRefundOwnershipIdQueryParams.prototype, "customData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", Number)
    ], PostCustomGatewayRefundOwnershipIdQueryParams.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=developerAmount" }),
        __metadata("design:type", Number)
    ], PostCustomGatewayRefundOwnershipIdQueryParams.prototype, "developerAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=feeAmount" }),
        __metadata("design:type", Number)
    ], PostCustomGatewayRefundOwnershipIdQueryParams.prototype, "feeAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=marketplaceAmount" }),
        __metadata("design:type", Number)
    ], PostCustomGatewayRefundOwnershipIdQueryParams.prototype, "marketplaceAmount", void 0);
    return PostCustomGatewayRefundOwnershipIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCustomGatewayRefundOwnershipIdQueryParams = PostCustomGatewayRefundOwnershipIdQueryParams;
var PostCustomGatewayRefundOwnershipIdRequest = /** @class */ (function (_super) {
    __extends(PostCustomGatewayRefundOwnershipIdRequest, _super);
    function PostCustomGatewayRefundOwnershipIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCustomGatewayRefundOwnershipIdPathParams)
    ], PostCustomGatewayRefundOwnershipIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCustomGatewayRefundOwnershipIdQueryParams)
    ], PostCustomGatewayRefundOwnershipIdRequest.prototype, "queryParams", void 0);
    return PostCustomGatewayRefundOwnershipIdRequest;
}(utils_1.SpeakeasyBase));
exports.PostCustomGatewayRefundOwnershipIdRequest = PostCustomGatewayRefundOwnershipIdRequest;
var PostCustomGatewayRefundOwnershipIdResponse = /** @class */ (function (_super) {
    __extends(PostCustomGatewayRefundOwnershipIdResponse, _super);
    function PostCustomGatewayRefundOwnershipIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCustomGatewayRefundOwnershipIdResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCustomGatewayRefundOwnershipIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCustomGatewayRefundOwnershipIdResponse.prototype, "statusCode", void 0);
    return PostCustomGatewayRefundOwnershipIdResponse;
}(utils_1.SpeakeasyBase));
exports.PostCustomGatewayRefundOwnershipIdResponse = PostCustomGatewayRefundOwnershipIdResponse;
