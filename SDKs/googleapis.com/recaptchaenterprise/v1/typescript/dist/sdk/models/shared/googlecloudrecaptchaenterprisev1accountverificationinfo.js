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
exports.GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo = exports.GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput = exports.GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudrecaptchaenterprisev1endpointverificationinfo_1 = require("./googlecloudrecaptchaenterprisev1endpointverificationinfo");
var googlecloudrecaptchaenterprisev1endpointverificationinfo_2 = require("./googlecloudrecaptchaenterprisev1endpointverificationinfo");
var GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum;
(function (GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum) {
    GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum["ResultUnspecified"] = "RESULT_UNSPECIFIED";
    GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum["SuccessUserVerified"] = "SUCCESS_USER_VERIFIED";
    GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum["ErrorUserNotVerified"] = "ERROR_USER_NOT_VERIFIED";
    GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum["ErrorSiteOnboardingIncomplete"] = "ERROR_SITE_ONBOARDING_INCOMPLETE";
    GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum["ErrorRecipientNotAllowed"] = "ERROR_RECIPIENT_NOT_ALLOWED";
    GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum["ErrorRecipientAbuseLimitExhausted"] = "ERROR_RECIPIENT_ABUSE_LIMIT_EXHAUSTED";
    GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum["ErrorCriticalInternal"] = "ERROR_CRITICAL_INTERNAL";
    GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum["ErrorCustomerQuotaExhausted"] = "ERROR_CUSTOMER_QUOTA_EXHAUSTED";
    GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum["ErrorVerificationBypassed"] = "ERROR_VERIFICATION_BYPASSED";
    GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum["ErrorVerdictMismatch"] = "ERROR_VERDICT_MISMATCH";
})(GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum = exports.GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum || (exports.GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum = {}));
// GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput
/**
 * Information about account verification, used for identity verification.
**/
var GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput, _super);
    function GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpoints", elemType: googlecloudrecaptchaenterprisev1endpointverificationinfo_1.GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput }),
        __metadata("design:type", Array)
    ], GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput.prototype, "endpoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput.prototype, "username", void 0);
    return GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput = GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput;
// GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo
/**
 * Information about account verification, used for identity verification.
**/
var GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo = /** @class */ (function (_super) {
    __extends(GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo, _super);
    function GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpoints", elemType: googlecloudrecaptchaenterprisev1endpointverificationinfo_2.GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo.prototype, "endpoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latestVerificationResult" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo.prototype, "latestVerificationResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo.prototype, "username", void 0);
    return GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo = GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo;
