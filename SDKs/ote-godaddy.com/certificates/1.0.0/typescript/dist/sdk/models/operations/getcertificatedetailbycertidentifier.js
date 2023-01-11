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
exports.GetCertificateDetailByCertIdentifierResponse = exports.GetCertificateDetailByCertIdentifierRequest = exports.GetCertificateDetailByCertIdentifierPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetCertificateDetailByCertIdentifierPathParams = /** @class */ (function (_super) {
    __extends(GetCertificateDetailByCertIdentifierPathParams, _super);
    function GetCertificateDetailByCertIdentifierPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=certificateId" }),
        __metadata("design:type", String)
    ], GetCertificateDetailByCertIdentifierPathParams.prototype, "certificateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], GetCertificateDetailByCertIdentifierPathParams.prototype, "customerId", void 0);
    return GetCertificateDetailByCertIdentifierPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCertificateDetailByCertIdentifierPathParams = GetCertificateDetailByCertIdentifierPathParams;
var GetCertificateDetailByCertIdentifierRequest = /** @class */ (function (_super) {
    __extends(GetCertificateDetailByCertIdentifierRequest, _super);
    function GetCertificateDetailByCertIdentifierRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCertificateDetailByCertIdentifierPathParams)
    ], GetCertificateDetailByCertIdentifierRequest.prototype, "pathParams", void 0);
    return GetCertificateDetailByCertIdentifierRequest;
}(utils_1.SpeakeasyBase));
exports.GetCertificateDetailByCertIdentifierRequest = GetCertificateDetailByCertIdentifierRequest;
var GetCertificateDetailByCertIdentifierResponse = /** @class */ (function (_super) {
    __extends(GetCertificateDetailByCertIdentifierResponse, _super);
    function GetCertificateDetailByCertIdentifierResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetCertificateDetailByCertIdentifierResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCertificateDetailByCertIdentifierResponse.prototype, "certificateDetailV2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCertificateDetailByCertIdentifierResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCertificateDetailByCertIdentifierResponse.prototype, "statusCode", void 0);
    return GetCertificateDetailByCertIdentifierResponse;
}(utils_1.SpeakeasyBase));
exports.GetCertificateDetailByCertIdentifierResponse = GetCertificateDetailByCertIdentifierResponse;
