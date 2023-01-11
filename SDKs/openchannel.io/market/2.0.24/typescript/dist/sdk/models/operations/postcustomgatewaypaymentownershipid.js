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
exports.PostCustomGatewayPaymentOwnershipIdResponse = exports.PostCustomGatewayPaymentOwnershipIdRequest = exports.PostCustomGatewayPaymentOwnershipIdQueryParams = exports.PostCustomGatewayPaymentOwnershipIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostCustomGatewayPaymentOwnershipIdPathParams = /** @class */ (function (_super) {
    __extends(PostCustomGatewayPaymentOwnershipIdPathParams, _super);
    function PostCustomGatewayPaymentOwnershipIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ownershipId" }),
        __metadata("design:type", String)
    ], PostCustomGatewayPaymentOwnershipIdPathParams.prototype, "ownershipId", void 0);
    return PostCustomGatewayPaymentOwnershipIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PostCustomGatewayPaymentOwnershipIdPathParams = PostCustomGatewayPaymentOwnershipIdPathParams;
var PostCustomGatewayPaymentOwnershipIdQueryParams = /** @class */ (function (_super) {
    __extends(PostCustomGatewayPaymentOwnershipIdQueryParams, _super);
    function PostCustomGatewayPaymentOwnershipIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=amount" }),
        __metadata("design:type", Number)
    ], PostCustomGatewayPaymentOwnershipIdQueryParams.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=customData" }),
        __metadata("design:type", String)
    ], PostCustomGatewayPaymentOwnershipIdQueryParams.prototype, "customData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", Number)
    ], PostCustomGatewayPaymentOwnershipIdQueryParams.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=developerAmount" }),
        __metadata("design:type", Number)
    ], PostCustomGatewayPaymentOwnershipIdQueryParams.prototype, "developerAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=feeAmount" }),
        __metadata("design:type", Number)
    ], PostCustomGatewayPaymentOwnershipIdQueryParams.prototype, "feeAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=marketplaceAmount" }),
        __metadata("design:type", Number)
    ], PostCustomGatewayPaymentOwnershipIdQueryParams.prototype, "marketplaceAmount", void 0);
    return PostCustomGatewayPaymentOwnershipIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCustomGatewayPaymentOwnershipIdQueryParams = PostCustomGatewayPaymentOwnershipIdQueryParams;
var PostCustomGatewayPaymentOwnershipIdRequest = /** @class */ (function (_super) {
    __extends(PostCustomGatewayPaymentOwnershipIdRequest, _super);
    function PostCustomGatewayPaymentOwnershipIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCustomGatewayPaymentOwnershipIdPathParams)
    ], PostCustomGatewayPaymentOwnershipIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCustomGatewayPaymentOwnershipIdQueryParams)
    ], PostCustomGatewayPaymentOwnershipIdRequest.prototype, "queryParams", void 0);
    return PostCustomGatewayPaymentOwnershipIdRequest;
}(utils_1.SpeakeasyBase));
exports.PostCustomGatewayPaymentOwnershipIdRequest = PostCustomGatewayPaymentOwnershipIdRequest;
var PostCustomGatewayPaymentOwnershipIdResponse = /** @class */ (function (_super) {
    __extends(PostCustomGatewayPaymentOwnershipIdResponse, _super);
    function PostCustomGatewayPaymentOwnershipIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCustomGatewayPaymentOwnershipIdResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCustomGatewayPaymentOwnershipIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCustomGatewayPaymentOwnershipIdResponse.prototype, "statusCode", void 0);
    return PostCustomGatewayPaymentOwnershipIdResponse;
}(utils_1.SpeakeasyBase));
exports.PostCustomGatewayPaymentOwnershipIdResponse = PostCustomGatewayPaymentOwnershipIdResponse;
