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
exports.GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource = void 0;
var utils_1 = require("../../../internal/utils");
var googleanalyticsadminv1betaaccount_1 = require("./googleanalyticsadminv1betaaccount");
var googleanalyticsadminv1betaconversionevent_1 = require("./googleanalyticsadminv1betaconversionevent");
var googleanalyticsadminv1betadataretentionsettings_1 = require("./googleanalyticsadminv1betadataretentionsettings");
var googleanalyticsadminv1betadatastream_1 = require("./googleanalyticsadminv1betadatastream");
var googleanalyticsadminv1betafirebaselink_1 = require("./googleanalyticsadminv1betafirebaselink");
var googleanalyticsadminv1betagoogleadslink_1 = require("./googleanalyticsadminv1betagoogleadslink");
var googleanalyticsadminv1betameasurementprotocolsecret_1 = require("./googleanalyticsadminv1betameasurementprotocolsecret");
var googleanalyticsadminv1betaproperty_1 = require("./googleanalyticsadminv1betaproperty");
// GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource
/**
 * A snapshot of a resource as before or after the result of a change in change history.
**/
var GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource, _super);
    function GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", googleanalyticsadminv1betaaccount_1.GoogleAnalyticsAdminV1betaAccount)
    ], GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conversionEvent" }),
        __metadata("design:type", googleanalyticsadminv1betaconversionevent_1.GoogleAnalyticsAdminV1betaConversionEvent)
    ], GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource.prototype, "conversionEvent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataRetentionSettings" }),
        __metadata("design:type", googleanalyticsadminv1betadataretentionsettings_1.GoogleAnalyticsAdminV1betaDataRetentionSettings)
    ], GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource.prototype, "dataRetentionSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataStream" }),
        __metadata("design:type", googleanalyticsadminv1betadatastream_1.GoogleAnalyticsAdminV1betaDataStream)
    ], GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource.prototype, "dataStream", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firebaseLink" }),
        __metadata("design:type", googleanalyticsadminv1betafirebaselink_1.GoogleAnalyticsAdminV1betaFirebaseLink)
    ], GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource.prototype, "firebaseLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=googleAdsLink" }),
        __metadata("design:type", googleanalyticsadminv1betagoogleadslink_1.GoogleAnalyticsAdminV1betaGoogleAdsLink)
    ], GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource.prototype, "googleAdsLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=measurementProtocolSecret" }),
        __metadata("design:type", googleanalyticsadminv1betameasurementprotocolsecret_1.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret)
    ], GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource.prototype, "measurementProtocolSecret", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=property" }),
        __metadata("design:type", googleanalyticsadminv1betaproperty_1.GoogleAnalyticsAdminV1betaProperty)
    ], GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource.prototype, "property", void 0);
    return GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource;
}(utils_1.SpeakeasyBase));
exports.GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource = GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource;
