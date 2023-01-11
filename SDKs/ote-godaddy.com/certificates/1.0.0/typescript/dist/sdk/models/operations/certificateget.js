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
exports.CertificateGetResponse = exports.CertificateGetRequest = exports.CertificateGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CertificateGetPathParams = /** @class */ (function (_super) {
    __extends(CertificateGetPathParams, _super);
    function CertificateGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=certificateId" }),
        __metadata("design:type", String)
    ], CertificateGetPathParams.prototype, "certificateId", void 0);
    return CertificateGetPathParams;
}(utils_1.SpeakeasyBase));
exports.CertificateGetPathParams = CertificateGetPathParams;
var CertificateGetRequest = /** @class */ (function (_super) {
    __extends(CertificateGetRequest, _super);
    function CertificateGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CertificateGetPathParams)
    ], CertificateGetRequest.prototype, "pathParams", void 0);
    return CertificateGetRequest;
}(utils_1.SpeakeasyBase));
exports.CertificateGetRequest = CertificateGetRequest;
var CertificateGetResponse = /** @class */ (function (_super) {
    __extends(CertificateGetResponse, _super);
    function CertificateGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CertificateGetResponse.prototype, "certificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CertificateGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CertificateGetResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CertificateGetResponse.prototype, "statusCode", void 0);
    return CertificateGetResponse;
}(utils_1.SpeakeasyBase));
exports.CertificateGetResponse = CertificateGetResponse;
