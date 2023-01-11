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
exports.GetSetupV1CustomersResponse = exports.GetSetupV1CustomersRequest = exports.GetSetupV1CustomersQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetSetupV1CustomersQueryParams = /** @class */ (function (_super) {
    __extends(GetSetupV1CustomersQueryParams, _super);
    function GetSetupV1CustomersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=deleted" }),
        __metadata("design:type", Boolean)
    ], GetSetupV1CustomersQueryParams.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], GetSetupV1CustomersQueryParams.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=groupId" }),
        __metadata("design:type", String)
    ], GetSetupV1CustomersQueryParams.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lastname" }),
        __metadata("design:type", String)
    ], GetSetupV1CustomersQueryParams.prototype, "lastname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSetupV1CustomersQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetSetupV1CustomersQueryParams.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetSetupV1CustomersQueryParams.prototype, "offset", void 0);
    return GetSetupV1CustomersQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSetupV1CustomersQueryParams = GetSetupV1CustomersQueryParams;
var GetSetupV1CustomersRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1CustomersRequest, _super);
    function GetSetupV1CustomersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSetupV1CustomersQueryParams)
    ], GetSetupV1CustomersRequest.prototype, "queryParams", void 0);
    return GetSetupV1CustomersRequest;
}(utils_1.SpeakeasyBase));
exports.GetSetupV1CustomersRequest = GetSetupV1CustomersRequest;
var GetSetupV1CustomersResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1CustomersResponse, _super);
    function GetSetupV1CustomersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSetupV1CustomersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSetupV1CustomersResponse.prototype, "customerListViewModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSetupV1CustomersResponse.prototype, "statusCode", void 0);
    return GetSetupV1CustomersResponse;
}(utils_1.SpeakeasyBase));
exports.GetSetupV1CustomersResponse = GetSetupV1CustomersResponse;
