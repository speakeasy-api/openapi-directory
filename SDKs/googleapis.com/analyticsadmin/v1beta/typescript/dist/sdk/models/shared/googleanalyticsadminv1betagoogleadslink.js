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
exports.GoogleAnalyticsAdminV1betaGoogleAdsLinkInput = exports.GoogleAnalyticsAdminV1betaGoogleAdsLink = void 0;
var utils_1 = require("../../../internal/utils");
// GoogleAnalyticsAdminV1betaGoogleAdsLink
/**
 * A link between a GA4 property and a Google Ads account.
**/
var GoogleAnalyticsAdminV1betaGoogleAdsLink = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1betaGoogleAdsLink, _super);
    function GoogleAnalyticsAdminV1betaGoogleAdsLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adsPersonalizationEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1betaGoogleAdsLink.prototype, "adsPersonalizationEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=canManageClients" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1betaGoogleAdsLink.prototype, "canManageClients", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaGoogleAdsLink.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creatorEmailAddress" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaGoogleAdsLink.prototype, "creatorEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaGoogleAdsLink.prototype, "customerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaGoogleAdsLink.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaGoogleAdsLink.prototype, "updateTime", void 0);
    return GoogleAnalyticsAdminV1betaGoogleAdsLink;
}(utils_1.SpeakeasyBase));
exports.GoogleAnalyticsAdminV1betaGoogleAdsLink = GoogleAnalyticsAdminV1betaGoogleAdsLink;
// GoogleAnalyticsAdminV1betaGoogleAdsLinkInput
/**
 * A link between a GA4 property and a Google Ads account.
**/
var GoogleAnalyticsAdminV1betaGoogleAdsLinkInput = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1betaGoogleAdsLinkInput, _super);
    function GoogleAnalyticsAdminV1betaGoogleAdsLinkInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adsPersonalizationEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1betaGoogleAdsLinkInput.prototype, "adsPersonalizationEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaGoogleAdsLinkInput.prototype, "customerId", void 0);
    return GoogleAnalyticsAdminV1betaGoogleAdsLinkInput;
}(utils_1.SpeakeasyBase));
exports.GoogleAnalyticsAdminV1betaGoogleAdsLinkInput = GoogleAnalyticsAdminV1betaGoogleAdsLinkInput;
