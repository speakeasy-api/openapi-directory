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
exports.GoogleAnalyticsAdminV1betaDataRetentionSettings = exports.GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum;
(function (GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum) {
    GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum["RetentionDurationUnspecified"] = "RETENTION_DURATION_UNSPECIFIED";
    GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum["TwoMonths"] = "TWO_MONTHS";
    GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum["FourteenMonths"] = "FOURTEEN_MONTHS";
    GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum["TwentySixMonths"] = "TWENTY_SIX_MONTHS";
    GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum["ThirtyEightMonths"] = "THIRTY_EIGHT_MONTHS";
    GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum["FiftyMonths"] = "FIFTY_MONTHS";
})(GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum = exports.GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum || (exports.GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum = {}));
// GoogleAnalyticsAdminV1betaDataRetentionSettings
/**
 * Settings values for data retention. This is a singleton resource.
**/
var GoogleAnalyticsAdminV1betaDataRetentionSettings = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1betaDataRetentionSettings, _super);
    function GoogleAnalyticsAdminV1betaDataRetentionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventDataRetention" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaDataRetentionSettings.prototype, "eventDataRetention", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaDataRetentionSettings.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resetUserDataOnNewActivity" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1betaDataRetentionSettings.prototype, "resetUserDataOnNewActivity", void 0);
    return GoogleAnalyticsAdminV1betaDataRetentionSettings;
}(utils_1.SpeakeasyBase));
exports.GoogleAnalyticsAdminV1betaDataRetentionSettings = GoogleAnalyticsAdminV1betaDataRetentionSettings;
