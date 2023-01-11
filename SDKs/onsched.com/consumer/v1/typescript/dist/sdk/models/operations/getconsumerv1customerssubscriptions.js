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
exports.GetConsumerV1CustomersSubscriptionsResponse = exports.GetConsumerV1CustomersSubscriptionsRequest = exports.GetConsumerV1CustomersSubscriptionsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetConsumerV1CustomersSubscriptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersSubscriptionsQueryParams, _super);
    function GetConsumerV1CustomersSubscriptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetConsumerV1CustomersSubscriptionsQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersSubscriptionsQueryParams.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetConsumerV1CustomersSubscriptionsQueryParams.prototype, "offset", void 0);
    return GetConsumerV1CustomersSubscriptionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetConsumerV1CustomersSubscriptionsQueryParams = GetConsumerV1CustomersSubscriptionsQueryParams;
var GetConsumerV1CustomersSubscriptionsRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersSubscriptionsRequest, _super);
    function GetConsumerV1CustomersSubscriptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConsumerV1CustomersSubscriptionsQueryParams)
    ], GetConsumerV1CustomersSubscriptionsRequest.prototype, "queryParams", void 0);
    return GetConsumerV1CustomersSubscriptionsRequest;
}(utils_1.SpeakeasyBase));
exports.GetConsumerV1CustomersSubscriptionsRequest = GetConsumerV1CustomersSubscriptionsRequest;
var GetConsumerV1CustomersSubscriptionsResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersSubscriptionsResponse, _super);
    function GetConsumerV1CustomersSubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersSubscriptionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetConsumerV1CustomersSubscriptionsResponse.prototype, "customerSubscriptionListViewModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetConsumerV1CustomersSubscriptionsResponse.prototype, "statusCode", void 0);
    return GetConsumerV1CustomersSubscriptionsResponse;
}(utils_1.SpeakeasyBase));
exports.GetConsumerV1CustomersSubscriptionsResponse = GetConsumerV1CustomersSubscriptionsResponse;
