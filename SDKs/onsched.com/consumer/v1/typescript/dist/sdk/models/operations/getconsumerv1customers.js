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
exports.GetConsumerV1CustomersResponse = exports.GetConsumerV1CustomersRequest = exports.GetConsumerV1CustomersQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetConsumerV1CustomersQueryParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersQueryParams, _super);
    function GetConsumerV1CustomersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=deleted" }),
        __metadata("design:type", Boolean)
    ], GetConsumerV1CustomersQueryParams.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersQueryParams.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=groupId" }),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersQueryParams.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lastname" }),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersQueryParams.prototype, "lastname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetConsumerV1CustomersQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersQueryParams.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetConsumerV1CustomersQueryParams.prototype, "offset", void 0);
    return GetConsumerV1CustomersQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetConsumerV1CustomersQueryParams = GetConsumerV1CustomersQueryParams;
var GetConsumerV1CustomersRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersRequest, _super);
    function GetConsumerV1CustomersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConsumerV1CustomersQueryParams)
    ], GetConsumerV1CustomersRequest.prototype, "queryParams", void 0);
    return GetConsumerV1CustomersRequest;
}(utils_1.SpeakeasyBase));
exports.GetConsumerV1CustomersRequest = GetConsumerV1CustomersRequest;
var GetConsumerV1CustomersResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersResponse, _super);
    function GetConsumerV1CustomersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetConsumerV1CustomersResponse.prototype, "customerListViewModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetConsumerV1CustomersResponse.prototype, "statusCode", void 0);
    return GetConsumerV1CustomersResponse;
}(utils_1.SpeakeasyBase));
exports.GetConsumerV1CustomersResponse = GetConsumerV1CustomersResponse;
