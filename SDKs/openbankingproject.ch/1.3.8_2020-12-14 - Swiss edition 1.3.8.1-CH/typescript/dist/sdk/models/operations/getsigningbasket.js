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
exports.GetSigningBasketResponse = exports.GetSigningBasketRequest = exports.GetSigningBasketSecurity = exports.GetSigningBasketHeaders = exports.GetSigningBasketPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSigningBasketPathParams = /** @class */ (function (_super) {
    __extends(GetSigningBasketPathParams, _super);
    function GetSigningBasketPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=basketId" }),
        __metadata("design:type", String)
    ], GetSigningBasketPathParams.prototype, "basketId", void 0);
    return GetSigningBasketPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSigningBasketPathParams = GetSigningBasketPathParams;
var GetSigningBasketHeaders = /** @class */ (function (_super) {
    __extends(GetSigningBasketHeaders, _super);
    function GetSigningBasketHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], GetSigningBasketHeaders.prototype, "digest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept" }),
        __metadata("design:type", String)
    ], GetSigningBasketHeaders.prototype, "psuAccept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" }),
        __metadata("design:type", String)
    ], GetSigningBasketHeaders.prototype, "psuAcceptCharset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" }),
        __metadata("design:type", String)
    ], GetSigningBasketHeaders.prototype, "psuAcceptEncoding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" }),
        __metadata("design:type", String)
    ], GetSigningBasketHeaders.prototype, "psuAcceptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Device-ID" }),
        __metadata("design:type", String)
    ], GetSigningBasketHeaders.prototype, "psuDeviceID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" }),
        __metadata("design:type", String)
    ], GetSigningBasketHeaders.prototype, "psuGeoLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-Http-Method" }),
        __metadata("design:type", String)
    ], GetSigningBasketHeaders.prototype, "psuHttpMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Address" }),
        __metadata("design:type", String)
    ], GetSigningBasketHeaders.prototype, "psuIPAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-IP-Port" }),
        __metadata("design:type", String)
    ], GetSigningBasketHeaders.prototype, "psuIPPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=PSU-User-Agent" }),
        __metadata("design:type", String)
    ], GetSigningBasketHeaders.prototype, "psuUserAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], GetSigningBasketHeaders.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], GetSigningBasketHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], GetSigningBasketHeaders.prototype, "xRequestID", void 0);
    return GetSigningBasketHeaders;
}(utils_1.SpeakeasyBase));
exports.GetSigningBasketHeaders = GetSigningBasketHeaders;
var GetSigningBasketSecurity = /** @class */ (function (_super) {
    __extends(GetSigningBasketSecurity, _super);
    function GetSigningBasketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], GetSigningBasketSecurity.prototype, "bearerAuthOAuth", void 0);
    return GetSigningBasketSecurity;
}(utils_1.SpeakeasyBase));
exports.GetSigningBasketSecurity = GetSigningBasketSecurity;
var GetSigningBasketRequest = /** @class */ (function (_super) {
    __extends(GetSigningBasketRequest, _super);
    function GetSigningBasketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSigningBasketPathParams)
    ], GetSigningBasketRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSigningBasketHeaders)
    ], GetSigningBasketRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSigningBasketSecurity)
    ], GetSigningBasketRequest.prototype, "security", void 0);
    return GetSigningBasketRequest;
}(utils_1.SpeakeasyBase));
exports.GetSigningBasketRequest = GetSigningBasketRequest;
var GetSigningBasketResponse = /** @class */ (function (_super) {
    __extends(GetSigningBasketResponse, _super);
    function GetSigningBasketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSigningBasketResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400NgSbs)
    ], GetSigningBasketResponse.prototype, "error400NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error400Sbs)
    ], GetSigningBasketResponse.prototype, "error400SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401NgSbs)
    ], GetSigningBasketResponse.prototype, "error401NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error401Sbs)
    ], GetSigningBasketResponse.prototype, "error401SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403NgSbs)
    ], GetSigningBasketResponse.prototype, "error403NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error403Sbs)
    ], GetSigningBasketResponse.prototype, "error403SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404NgSbs)
    ], GetSigningBasketResponse.prototype, "error404NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error404Sbs)
    ], GetSigningBasketResponse.prototype, "error404SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405NgSbs)
    ], GetSigningBasketResponse.prototype, "error405NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error405Sbs)
    ], GetSigningBasketResponse.prototype, "error405SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409NgSbs)
    ], GetSigningBasketResponse.prototype, "error409NGSBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Error409Sbs)
    ], GetSigningBasketResponse.prototype, "error409SBS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSigningBasketResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSigningBasketResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SigningBasketResponse200)
    ], GetSigningBasketResponse.prototype, "signingBasketResponse200", void 0);
    return GetSigningBasketResponse;
}(utils_1.SpeakeasyBase));
exports.GetSigningBasketResponse = GetSigningBasketResponse;
