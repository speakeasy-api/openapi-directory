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
exports.CertificateGetEntitlementResponse = exports.CertificateGetEntitlementRequest = exports.CertificateGetEntitlementQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var CertificateGetEntitlementQueryParams = /** @class */ (function (_super) {
    __extends(CertificateGetEntitlementQueryParams, _super);
    function CertificateGetEntitlementQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=entitlementId" }),
        __metadata("design:type", String)
    ], CertificateGetEntitlementQueryParams.prototype, "entitlementId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=latest" }),
        __metadata("design:type", Boolean)
    ], CertificateGetEntitlementQueryParams.prototype, "latest", void 0);
    return CertificateGetEntitlementQueryParams;
}(utils_1.SpeakeasyBase));
exports.CertificateGetEntitlementQueryParams = CertificateGetEntitlementQueryParams;
var CertificateGetEntitlementRequest = /** @class */ (function (_super) {
    __extends(CertificateGetEntitlementRequest, _super);
    function CertificateGetEntitlementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CertificateGetEntitlementQueryParams)
    ], CertificateGetEntitlementRequest.prototype, "queryParams", void 0);
    return CertificateGetEntitlementRequest;
}(utils_1.SpeakeasyBase));
exports.CertificateGetEntitlementRequest = CertificateGetEntitlementRequest;
var CertificateGetEntitlementResponse = /** @class */ (function (_super) {
    __extends(CertificateGetEntitlementResponse, _super);
    function CertificateGetEntitlementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], CertificateGetEntitlementResponse.prototype, "certificates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CertificateGetEntitlementResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CertificateGetEntitlementResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CertificateGetEntitlementResponse.prototype, "statusCode", void 0);
    return CertificateGetEntitlementResponse;
}(utils_1.SpeakeasyBase));
exports.CertificateGetEntitlementResponse = CertificateGetEntitlementResponse;
