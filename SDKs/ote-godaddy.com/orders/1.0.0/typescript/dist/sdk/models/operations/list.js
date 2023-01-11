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
exports.ListResponse = exports.ListRequest = exports.ListHeaders = exports.ListQueryParams = exports.ListSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ListSortEnum;
(function (ListSortEnum) {
    ListSortEnum["CreatedAt"] = "createdAt";
    ListSortEnum["MinusCreatedAt"] = "-createdAt";
    ListSortEnum["OrderId"] = "orderId";
    ListSortEnum["MinusOrderId"] = "-orderId";
    ListSortEnum["PricingTotal"] = "pricing.total";
    ListSortEnum["MinusPricingTotal"] = "-pricing.total";
})(ListSortEnum = exports.ListSortEnum || (exports.ListSortEnum = {}));
var ListQueryParams = /** @class */ (function (_super) {
    __extends(ListQueryParams, _super);
    function ListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=domain" }),
        __metadata("design:type", String)
    ], ListQueryParams.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=parentOrderId" }),
        __metadata("design:type", String)
    ], ListQueryParams.prototype, "parentOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=paymentProfileId" }),
        __metadata("design:type", Number)
    ], ListQueryParams.prototype, "paymentProfileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=periodEnd" }),
        __metadata("design:type", String)
    ], ListQueryParams.prototype, "periodEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=periodStart" }),
        __metadata("design:type", String)
    ], ListQueryParams.prototype, "periodStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=productGroupId" }),
        __metadata("design:type", Number)
    ], ListQueryParams.prototype, "productGroupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListQueryParams.prototype, "sort", void 0);
    return ListQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListQueryParams = ListQueryParams;
var ListHeaders = /** @class */ (function (_super) {
    __extends(ListHeaders, _super);
    function ListHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Market-Id" }),
        __metadata("design:type", String)
    ], ListHeaders.prototype, "xMarketId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Shopper-Id" }),
        __metadata("design:type", String)
    ], ListHeaders.prototype, "xShopperId", void 0);
    return ListHeaders;
}(utils_1.SpeakeasyBase));
exports.ListHeaders = ListHeaders;
var ListRequest = /** @class */ (function (_super) {
    __extends(ListRequest, _super);
    function ListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListQueryParams)
    ], ListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListHeaders)
    ], ListRequest.prototype, "headers", void 0);
    return ListRequest;
}(utils_1.SpeakeasyBase));
exports.ListRequest = ListRequest;
var ListResponse = /** @class */ (function (_super) {
    __extends(ListResponse, _super);
    function ListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListResponse.prototype, "errorLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListResponse.prototype, "orderList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListResponse.prototype, "statusCode", void 0);
    return ListResponse;
}(utils_1.SpeakeasyBase));
exports.ListResponse = ListResponse;
