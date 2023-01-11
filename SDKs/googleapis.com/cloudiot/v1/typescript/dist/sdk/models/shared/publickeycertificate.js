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
exports.PublicKeyCertificate = exports.PublicKeyCertificateFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var x509certificatedetails_1 = require("./x509certificatedetails");
var PublicKeyCertificateFormatEnum;
(function (PublicKeyCertificateFormatEnum) {
    PublicKeyCertificateFormatEnum["UnspecifiedPublicKeyCertificateFormat"] = "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT";
    PublicKeyCertificateFormatEnum["X509CertificatePem"] = "X509_CERTIFICATE_PEM";
})(PublicKeyCertificateFormatEnum = exports.PublicKeyCertificateFormatEnum || (exports.PublicKeyCertificateFormatEnum = {}));
// PublicKeyCertificate
/**
 * A public key certificate format and data.
**/
var PublicKeyCertificate = /** @class */ (function (_super) {
    __extends(PublicKeyCertificate, _super);
    function PublicKeyCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificate" }),
        __metadata("design:type", String)
    ], PublicKeyCertificate.prototype, "certificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PublicKeyCertificate.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=x509Details" }),
        __metadata("design:type", x509certificatedetails_1.X509CertificateDetails)
    ], PublicKeyCertificate.prototype, "x509Details", void 0);
    return PublicKeyCertificate;
}(utils_1.SpeakeasyBase));
exports.PublicKeyCertificate = PublicKeyCertificate;
