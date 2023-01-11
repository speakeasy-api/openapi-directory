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
exports.GetCustomerCertificatesByCustomerIdResponse = exports.GetCustomerCertificatesByCustomerIdRequest = exports.GetCustomerCertificatesByCustomerIdQueryParams = exports.GetCustomerCertificatesByCustomerIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetCustomerCertificatesByCustomerIdPathParams = /** @class */ (function (_super) {
    __extends(GetCustomerCertificatesByCustomerIdPathParams, _super);
    function GetCustomerCertificatesByCustomerIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], GetCustomerCertificatesByCustomerIdPathParams.prototype, "customerId", void 0);
    return GetCustomerCertificatesByCustomerIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCustomerCertificatesByCustomerIdPathParams = GetCustomerCertificatesByCustomerIdPathParams;
var GetCustomerCertificatesByCustomerIdQueryParams = /** @class */ (function (_super) {
    __extends(GetCustomerCertificatesByCustomerIdQueryParams, _super);
    function GetCustomerCertificatesByCustomerIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetCustomerCertificatesByCustomerIdQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetCustomerCertificatesByCustomerIdQueryParams.prototype, "offset", void 0);
    return GetCustomerCertificatesByCustomerIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCustomerCertificatesByCustomerIdQueryParams = GetCustomerCertificatesByCustomerIdQueryParams;
var GetCustomerCertificatesByCustomerIdRequest = /** @class */ (function (_super) {
    __extends(GetCustomerCertificatesByCustomerIdRequest, _super);
    function GetCustomerCertificatesByCustomerIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCustomerCertificatesByCustomerIdPathParams)
    ], GetCustomerCertificatesByCustomerIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCustomerCertificatesByCustomerIdQueryParams)
    ], GetCustomerCertificatesByCustomerIdRequest.prototype, "queryParams", void 0);
    return GetCustomerCertificatesByCustomerIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetCustomerCertificatesByCustomerIdRequest = GetCustomerCertificatesByCustomerIdRequest;
var GetCustomerCertificatesByCustomerIdResponse = /** @class */ (function (_super) {
    __extends(GetCustomerCertificatesByCustomerIdResponse, _super);
    function GetCustomerCertificatesByCustomerIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetCustomerCertificatesByCustomerIdResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCustomerCertificatesByCustomerIdResponse.prototype, "certificateSummariesV2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCustomerCertificatesByCustomerIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCustomerCertificatesByCustomerIdResponse.prototype, "statusCode", void 0);
    return GetCustomerCertificatesByCustomerIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetCustomerCertificatesByCustomerIdResponse = GetCustomerCertificatesByCustomerIdResponse;
