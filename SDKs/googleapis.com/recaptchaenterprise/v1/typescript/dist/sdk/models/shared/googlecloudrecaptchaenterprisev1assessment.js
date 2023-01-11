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
exports.GoogleCloudRecaptchaenterpriseV1Assessment = exports.GoogleCloudRecaptchaenterpriseV1AssessmentInput = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudrecaptchaenterprisev1accountdefenderassessment_1 = require("./googlecloudrecaptchaenterprisev1accountdefenderassessment");
var googlecloudrecaptchaenterprisev1accountverificationinfo_1 = require("./googlecloudrecaptchaenterprisev1accountverificationinfo");
var googlecloudrecaptchaenterprisev1event_1 = require("./googlecloudrecaptchaenterprisev1event");
var googlecloudrecaptchaenterprisev1privatepasswordleakverification_1 = require("./googlecloudrecaptchaenterprisev1privatepasswordleakverification");
var googlecloudrecaptchaenterprisev1riskanalysis_1 = require("./googlecloudrecaptchaenterprisev1riskanalysis");
var googlecloudrecaptchaenterprisev1tokenproperties_1 = require("./googlecloudrecaptchaenterprisev1tokenproperties");
var googlecloudrecaptchaenterprisev1accountverificationinfo_2 = require("./googlecloudrecaptchaenterprisev1accountverificationinfo");
var googlecloudrecaptchaenterprisev1privatepasswordleakverification_2 = require("./googlecloudrecaptchaenterprisev1privatepasswordleakverification");
// GoogleCloudRecaptchaenterpriseV1AssessmentInput
/**
 * A recaptcha assessment resource.
**/
var GoogleCloudRecaptchaenterpriseV1AssessmentInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRecaptchaenterpriseV1AssessmentInput, _super);
    function GoogleCloudRecaptchaenterpriseV1AssessmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountDefenderAssessment" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1accountdefenderassessment_1.GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment)
    ], GoogleCloudRecaptchaenterpriseV1AssessmentInput.prototype, "accountDefenderAssessment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountVerification" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1accountverificationinfo_1.GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput)
    ], GoogleCloudRecaptchaenterpriseV1AssessmentInput.prototype, "accountVerification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1event_1.GoogleCloudRecaptchaenterpriseV1Event)
    ], GoogleCloudRecaptchaenterpriseV1AssessmentInput.prototype, "event", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privatePasswordLeakVerification" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1privatepasswordleakverification_1.GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput)
    ], GoogleCloudRecaptchaenterpriseV1AssessmentInput.prototype, "privatePasswordLeakVerification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=riskAnalysis" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1riskanalysis_1.GoogleCloudRecaptchaenterpriseV1RiskAnalysis)
    ], GoogleCloudRecaptchaenterpriseV1AssessmentInput.prototype, "riskAnalysis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tokenProperties" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1tokenproperties_1.GoogleCloudRecaptchaenterpriseV1TokenProperties)
    ], GoogleCloudRecaptchaenterpriseV1AssessmentInput.prototype, "tokenProperties", void 0);
    return GoogleCloudRecaptchaenterpriseV1AssessmentInput;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudRecaptchaenterpriseV1AssessmentInput = GoogleCloudRecaptchaenterpriseV1AssessmentInput;
// GoogleCloudRecaptchaenterpriseV1Assessment
/**
 * A recaptcha assessment resource.
**/
var GoogleCloudRecaptchaenterpriseV1Assessment = /** @class */ (function (_super) {
    __extends(GoogleCloudRecaptchaenterpriseV1Assessment, _super);
    function GoogleCloudRecaptchaenterpriseV1Assessment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountDefenderAssessment" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1accountdefenderassessment_1.GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment)
    ], GoogleCloudRecaptchaenterpriseV1Assessment.prototype, "accountDefenderAssessment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountVerification" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1accountverificationinfo_2.GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo)
    ], GoogleCloudRecaptchaenterpriseV1Assessment.prototype, "accountVerification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1event_1.GoogleCloudRecaptchaenterpriseV1Event)
    ], GoogleCloudRecaptchaenterpriseV1Assessment.prototype, "event", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1Assessment.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privatePasswordLeakVerification" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1privatepasswordleakverification_2.GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification)
    ], GoogleCloudRecaptchaenterpriseV1Assessment.prototype, "privatePasswordLeakVerification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=riskAnalysis" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1riskanalysis_1.GoogleCloudRecaptchaenterpriseV1RiskAnalysis)
    ], GoogleCloudRecaptchaenterpriseV1Assessment.prototype, "riskAnalysis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tokenProperties" }),
        __metadata("design:type", googlecloudrecaptchaenterprisev1tokenproperties_1.GoogleCloudRecaptchaenterpriseV1TokenProperties)
    ], GoogleCloudRecaptchaenterpriseV1Assessment.prototype, "tokenProperties", void 0);
    return GoogleCloudRecaptchaenterpriseV1Assessment;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudRecaptchaenterpriseV1Assessment = GoogleCloudRecaptchaenterpriseV1Assessment;
