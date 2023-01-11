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
exports.EmailVerifyResponse = void 0;
var utils_1 = require("../../../internal/utils");
var EmailVerifyResponse = /** @class */ (function (_super) {
    __extends(EmailVerifyResponse, _super);
    function EmailVerifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], EmailVerifyResponse.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domainError" }),
        __metadata("design:type", Boolean)
    ], EmailVerifyResponse.prototype, "domainError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], EmailVerifyResponse.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isCatchAll" }),
        __metadata("design:type", Boolean)
    ], EmailVerifyResponse.prototype, "isCatchAll", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isDeferred" }),
        __metadata("design:type", Boolean)
    ], EmailVerifyResponse.prototype, "isDeferred", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isDisposable" }),
        __metadata("design:type", Boolean)
    ], EmailVerifyResponse.prototype, "isDisposable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isFreemail" }),
        __metadata("design:type", Boolean)
    ], EmailVerifyResponse.prototype, "isFreemail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPersonal" }),
        __metadata("design:type", Boolean)
    ], EmailVerifyResponse.prototype, "isPersonal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], EmailVerifyResponse.prototype, "provider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=smtpResponse" }),
        __metadata("design:type", String)
    ], EmailVerifyResponse.prototype, "smtpResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=smtpStatus" }),
        __metadata("design:type", String)
    ], EmailVerifyResponse.prototype, "smtpStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=syntaxError" }),
        __metadata("design:type", Boolean)
    ], EmailVerifyResponse.prototype, "syntaxError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=typosFixed" }),
        __metadata("design:type", Boolean)
    ], EmailVerifyResponse.prototype, "typosFixed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valid" }),
        __metadata("design:type", Boolean)
    ], EmailVerifyResponse.prototype, "valid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verified" }),
        __metadata("design:type", Boolean)
    ], EmailVerifyResponse.prototype, "verified", void 0);
    return EmailVerifyResponse;
}(utils_1.SpeakeasyBase));
exports.EmailVerifyResponse = EmailVerifyResponse;
