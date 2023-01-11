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
exports.GetPaymentCancellationScaStatusResponse = exports.GetPaymentCancellationScaStatusRequest = exports.GetPaymentCancellationScaStatusSecurity = exports.GetPaymentCancellationScaStatusHeaders = exports.GetPaymentCancellationScaStatusPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPaymentCancellationScaStatusPathParams = /** @class */ (function (_super) {
    __extends(GetPaymentCancellationScaStatusPathParams, _super);
    function GetPaymentCancellationScaStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=authorisationId" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusPathParams.prototype, "authorisationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=payment-product" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusPathParams.prototype, "paymentProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=payment-service" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusPathParams.prototype, "paymentService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusPathParams.prototype, "paymentId", void 0);
    return GetPaymentCancellationScaStatusPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPaymentCancellationScaStatusPathParams = GetPaymentCancellationScaStatusPathParams;
var GetPaymentCancellationScaStatusHeaders = /** @class */ (function (_super) {
    __extends(GetPaymentCancellationScaStatusHeaders, _super);
    function GetPaymentCancellationScaStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "digest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuAccept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuDeviceID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuIPAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuIPPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusHeaders.prototype, "xRequestID", void 0);
    return GetPaymentCancellationScaStatusHeaders;
}(utils_1.SpeakeasyBase));
exports.GetPaymentCancellationScaStatusHeaders = GetPaymentCancellationScaStatusHeaders;
var GetPaymentCancellationScaStatusSecurity = /** @class */ (function (_super) {
    __extends(GetPaymentCancellationScaStatusSecurity, _super);
    function GetPaymentCancellationScaStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], GetPaymentCancellationScaStatusSecurity.prototype, "bearerAuthOAuth", void 0);
    return GetPaymentCancellationScaStatusSecurity;
}(utils_1.SpeakeasyBase));
exports.GetPaymentCancellationScaStatusSecurity = GetPaymentCancellationScaStatusSecurity;
var GetPaymentCancellationScaStatusRequest = /** @class */ (function (_super) {
    __extends(GetPaymentCancellationScaStatusRequest, _super);
    function GetPaymentCancellationScaStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentCancellationScaStatusPathParams)
    ], GetPaymentCancellationScaStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentCancellationScaStatusHeaders)
    ], GetPaymentCancellationScaStatusRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentCancellationScaStatusSecurity)
    ], GetPaymentCancellationScaStatusRequest.prototype, "security", void 0);
    return GetPaymentCancellationScaStatusRequest;
}(utils_1.SpeakeasyBase));
exports.GetPaymentCancellationScaStatusRequest = GetPaymentCancellationScaStatusRequest;
var GetPaymentCancellationScaStatusResponse = /** @class */ (function (_super) {
    __extends(GetPaymentCancellationScaStatusResponse, _super);
    function GetPaymentCancellationScaStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPaymentCancellationScaStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400NgPis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error400NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400Pis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error400PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401NgPis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error401NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401Pis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error401PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403NgPis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error403NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403Pis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error403PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404NgPis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error404NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404Pis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error404PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405NgPis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error405NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405Pis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error405PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409NgPis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error409NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409Pis)
    ], GetPaymentCancellationScaStatusResponse.prototype, "error409PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentCancellationScaStatusResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPaymentCancellationScaStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ScaStatusResponse)
    ], GetPaymentCancellationScaStatusResponse.prototype, "scaStatusResponse", void 0);
    return GetPaymentCancellationScaStatusResponse;
}(utils_1.SpeakeasyBase));
exports.GetPaymentCancellationScaStatusResponse = GetPaymentCancellationScaStatusResponse;
