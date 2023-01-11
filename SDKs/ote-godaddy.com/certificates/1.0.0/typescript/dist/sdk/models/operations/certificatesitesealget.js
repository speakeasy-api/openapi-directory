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
exports.CertificateSitesealGetResponse = exports.CertificateSitesealGetRequest = exports.CertificateSitesealGetQueryParams = exports.CertificateSitesealGetThemeEnum = exports.CertificateSitesealGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CertificateSitesealGetPathParams = /** @class */ (function (_super) {
    __extends(CertificateSitesealGetPathParams, _super);
    function CertificateSitesealGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=certificateId" }),
        __metadata("design:type", String)
    ], CertificateSitesealGetPathParams.prototype, "certificateId", void 0);
    return CertificateSitesealGetPathParams;
}(utils_1.SpeakeasyBase));
exports.CertificateSitesealGetPathParams = CertificateSitesealGetPathParams;
var CertificateSitesealGetThemeEnum;
(function (CertificateSitesealGetThemeEnum) {
    CertificateSitesealGetThemeEnum["Dark"] = "DARK";
    CertificateSitesealGetThemeEnum["Light"] = "LIGHT";
})(CertificateSitesealGetThemeEnum = exports.CertificateSitesealGetThemeEnum || (exports.CertificateSitesealGetThemeEnum = {}));
var CertificateSitesealGetQueryParams = /** @class */ (function (_super) {
    __extends(CertificateSitesealGetQueryParams, _super);
    function CertificateSitesealGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], CertificateSitesealGetQueryParams.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=theme" }),
        __metadata("design:type", String)
    ], CertificateSitesealGetQueryParams.prototype, "theme", void 0);
    return CertificateSitesealGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.CertificateSitesealGetQueryParams = CertificateSitesealGetQueryParams;
var CertificateSitesealGetRequest = /** @class */ (function (_super) {
    __extends(CertificateSitesealGetRequest, _super);
    function CertificateSitesealGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CertificateSitesealGetPathParams)
    ], CertificateSitesealGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CertificateSitesealGetQueryParams)
    ], CertificateSitesealGetRequest.prototype, "queryParams", void 0);
    return CertificateSitesealGetRequest;
}(utils_1.SpeakeasyBase));
exports.CertificateSitesealGetRequest = CertificateSitesealGetRequest;
var CertificateSitesealGetResponse = /** @class */ (function (_super) {
    __extends(CertificateSitesealGetResponse, _super);
    function CertificateSitesealGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CertificateSitesealGetResponse.prototype, "certificateSiteSeal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CertificateSitesealGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CertificateSitesealGetResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CertificateSitesealGetResponse.prototype, "statusCode", void 0);
    return CertificateSitesealGetResponse;
}(utils_1.SpeakeasyBase));
exports.CertificateSitesealGetResponse = CertificateSitesealGetResponse;
