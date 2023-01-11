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
exports.GoogleCloudChannelV1RenewalSettings = exports.GoogleCloudChannelV1RenewalSettingsInput = exports.GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudchannelv1period_1 = require("./googlecloudchannelv1period");
var GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum;
(function (GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum) {
    GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum["PaymentPlanUnspecified"] = "PAYMENT_PLAN_UNSPECIFIED";
    GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum["Commitment"] = "COMMITMENT";
    GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum["Flexible"] = "FLEXIBLE";
    GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum["Free"] = "FREE";
    GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum["Trial"] = "TRIAL";
    GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum["Offline"] = "OFFLINE";
})(GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum = exports.GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum || (exports.GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum = {}));
// GoogleCloudChannelV1RenewalSettingsInput
/**
 * Renewal settings for renewable Offers.
**/
var GoogleCloudChannelV1RenewalSettingsInput = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1RenewalSettingsInput, _super);
    function GoogleCloudChannelV1RenewalSettingsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableRenewal" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudChannelV1RenewalSettingsInput.prototype, "enableRenewal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentCycle" }),
        __metadata("design:type", googlecloudchannelv1period_1.GoogleCloudChannelV1Period)
    ], GoogleCloudChannelV1RenewalSettingsInput.prototype, "paymentCycle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentPlan" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1RenewalSettingsInput.prototype, "paymentPlan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resizeUnitCount" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudChannelV1RenewalSettingsInput.prototype, "resizeUnitCount", void 0);
    return GoogleCloudChannelV1RenewalSettingsInput;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudChannelV1RenewalSettingsInput = GoogleCloudChannelV1RenewalSettingsInput;
// GoogleCloudChannelV1RenewalSettings
/**
 * Renewal settings for renewable Offers.
**/
var GoogleCloudChannelV1RenewalSettings = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1RenewalSettings, _super);
    function GoogleCloudChannelV1RenewalSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableRenewal" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudChannelV1RenewalSettings.prototype, "enableRenewal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentCycle" }),
        __metadata("design:type", googlecloudchannelv1period_1.GoogleCloudChannelV1Period)
    ], GoogleCloudChannelV1RenewalSettings.prototype, "paymentCycle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentPlan" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1RenewalSettings.prototype, "paymentPlan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resizeUnitCount" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudChannelV1RenewalSettings.prototype, "resizeUnitCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheduledRenewalOffer" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1RenewalSettings.prototype, "scheduledRenewalOffer", void 0);
    return GoogleCloudChannelV1RenewalSettings;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudChannelV1RenewalSettings = GoogleCloudChannelV1RenewalSettings;
