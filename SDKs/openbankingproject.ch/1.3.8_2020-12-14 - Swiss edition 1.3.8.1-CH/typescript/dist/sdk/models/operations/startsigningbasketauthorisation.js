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
exports.StartSigningBasketAuthorisationResponse = exports.StartSigningBasketAuthorisationRequest = exports.StartSigningBasketAuthorisationSecurity = exports.StartSigningBasketAuthorisationHeaders = exports.StartSigningBasketAuthorisationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StartSigningBasketAuthorisationPathParams = /** @class */ (function (_super) {
    __extends(StartSigningBasketAuthorisationPathParams, _super);
    function StartSigningBasketAuthorisationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=basketId" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationPathParams.prototype, "basketId", void 0);
    return StartSigningBasketAuthorisationPathParams;
}(utils_1.SpeakeasyBase));
exports.StartSigningBasketAuthorisationPathParams = StartSigningBasketAuthorisationPathParams;
var StartSigningBasketAuthorisationHeaders = /** @class */ (function (_super) {
    __extends(StartSigningBasketAuthorisationHeaders, _super);
    function StartSigningBasketAuthorisationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "digest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuAccept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuCorporateID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID-Type" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuCorporateIDType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuDeviceID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-ID" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-ID-Type" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuIDType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuIPAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuIPPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Nok-Redirect-URI" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "tppNokRedirectURI", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Notification-Content-Preferred" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "tppNotificationContentPreferred", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Notification-URI" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "tppNotificationURI", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Redirect-Preferred" }),
        __metadata("design:type", Boolean)
    ], StartSigningBasketAuthorisationHeaders.prototype, "tppRedirectPreferred", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Redirect-URI" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "tppRedirectURI", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationHeaders.prototype, "xRequestID", void 0);
    return StartSigningBasketAuthorisationHeaders;
}(utils_1.SpeakeasyBase));
exports.StartSigningBasketAuthorisationHeaders = StartSigningBasketAuthorisationHeaders;
var StartSigningBasketAuthorisationSecurity = /** @class */ (function (_super) {
    __extends(StartSigningBasketAuthorisationSecurity, _super);
    function StartSigningBasketAuthorisationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], StartSigningBasketAuthorisationSecurity.prototype, "bearerAuthOAuth", void 0);
    return StartSigningBasketAuthorisationSecurity;
}(utils_1.SpeakeasyBase));
exports.StartSigningBasketAuthorisationSecurity = StartSigningBasketAuthorisationSecurity;
var StartSigningBasketAuthorisationRequest = /** @class */ (function (_super) {
    __extends(StartSigningBasketAuthorisationRequest, _super);
    function StartSigningBasketAuthorisationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StartSigningBasketAuthorisationPathParams)
    ], StartSigningBasketAuthorisationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StartSigningBasketAuthorisationHeaders)
    ], StartSigningBasketAuthorisationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], StartSigningBasketAuthorisationRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StartSigningBasketAuthorisationSecurity)
    ], StartSigningBasketAuthorisationRequest.prototype, "security", void 0);
    return StartSigningBasketAuthorisationRequest;
}(utils_1.SpeakeasyBase));
exports.StartSigningBasketAuthorisationRequest = StartSigningBasketAuthorisationRequest;
var StartSigningBasketAuthorisationResponse = /** @class */ (function (_super) {
    __extends(StartSigningBasketAuthorisationResponse, _super);
    function StartSigningBasketAuthorisationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StartSigningBasketAuthorisationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400NgSbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error400NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400Sbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error400SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401NgSbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error401NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401Sbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error401SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403NgSbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error403NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403Sbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error403SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404NgSbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error404NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404Sbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error404SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405NgSbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error405NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405Sbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error405SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409NgSbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error409NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409Sbs)
    ], StartSigningBasketAuthorisationResponse.prototype, "error409SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartSigningBasketAuthorisationResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StartSigningBasketAuthorisationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.StartScaprocessResponse)
    ], StartSigningBasketAuthorisationResponse.prototype, "startScaprocessResponse", void 0);
    return StartSigningBasketAuthorisationResponse;
}(utils_1.SpeakeasyBase));
exports.StartSigningBasketAuthorisationResponse = StartSigningBasketAuthorisationResponse;
