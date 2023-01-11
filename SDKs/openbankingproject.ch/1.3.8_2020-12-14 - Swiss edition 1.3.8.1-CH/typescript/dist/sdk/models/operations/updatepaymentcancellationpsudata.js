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
exports.UpdatePaymentCancellationPsuDataResponse = exports.UpdatePaymentCancellationPsuDataRequest = exports.UpdatePaymentCancellationPsuDataSecurity = exports.UpdatePaymentCancellationPsuDataHeaders = exports.UpdatePaymentCancellationPsuDataPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdatePaymentCancellationPsuDataPathParams = /** @class */ (function (_super) {
    __extends(UpdatePaymentCancellationPsuDataPathParams, _super);
    function UpdatePaymentCancellationPsuDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=authorisationId" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataPathParams.prototype, "authorisationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=payment-product" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataPathParams.prototype, "paymentProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=payment-service" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataPathParams.prototype, "paymentService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataPathParams.prototype, "paymentId", void 0);
    return UpdatePaymentCancellationPsuDataPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdatePaymentCancellationPsuDataPathParams = UpdatePaymentCancellationPsuDataPathParams;
var UpdatePaymentCancellationPsuDataHeaders = /** @class */ (function (_super) {
    __extends(UpdatePaymentCancellationPsuDataHeaders, _super);
    function UpdatePaymentCancellationPsuDataHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "digest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "psuAccept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "psuCorporateID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID-Type" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "psuCorporateIDType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "psuDeviceID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-ID" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "psuID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-ID-Type" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "psuIDType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "psuIPAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "psuIPPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataHeaders.prototype, "xRequestID", void 0);
    return UpdatePaymentCancellationPsuDataHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdatePaymentCancellationPsuDataHeaders = UpdatePaymentCancellationPsuDataHeaders;
var UpdatePaymentCancellationPsuDataSecurity = /** @class */ (function (_super) {
    __extends(UpdatePaymentCancellationPsuDataSecurity, _super);
    function UpdatePaymentCancellationPsuDataSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], UpdatePaymentCancellationPsuDataSecurity.prototype, "bearerAuthOAuth", void 0);
    return UpdatePaymentCancellationPsuDataSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdatePaymentCancellationPsuDataSecurity = UpdatePaymentCancellationPsuDataSecurity;
var UpdatePaymentCancellationPsuDataRequest = /** @class */ (function (_super) {
    __extends(UpdatePaymentCancellationPsuDataRequest, _super);
    function UpdatePaymentCancellationPsuDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePaymentCancellationPsuDataPathParams)
    ], UpdatePaymentCancellationPsuDataRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePaymentCancellationPsuDataHeaders)
    ], UpdatePaymentCancellationPsuDataRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UpdatePaymentCancellationPsuDataRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePaymentCancellationPsuDataSecurity)
    ], UpdatePaymentCancellationPsuDataRequest.prototype, "security", void 0);
    return UpdatePaymentCancellationPsuDataRequest;
}(utils_1.SpeakeasyBase));
exports.UpdatePaymentCancellationPsuDataRequest = UpdatePaymentCancellationPsuDataRequest;
var UpdatePaymentCancellationPsuDataResponse = /** @class */ (function (_super) {
    __extends(UpdatePaymentCancellationPsuDataResponse, _super);
    function UpdatePaymentCancellationPsuDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400NgPis)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "error400NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400Pis)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "error400PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401NgPis)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "error401NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401Pis)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "error401PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403NgPis)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "error403NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403Pis)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "error403PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404NgPis)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "error404NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404Pis)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "error404PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405NgPis)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "error405NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405Pis)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "error405PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409NgPis)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "error409NGPIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409Pis)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "error409PIS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePaymentCancellationPsuDataResponse.prototype, "updatePaymentCancellationPsuData200ApplicationJSONOneOf", void 0);
    return UpdatePaymentCancellationPsuDataResponse;
}(utils_1.SpeakeasyBase));
exports.UpdatePaymentCancellationPsuDataResponse = UpdatePaymentCancellationPsuDataResponse;
