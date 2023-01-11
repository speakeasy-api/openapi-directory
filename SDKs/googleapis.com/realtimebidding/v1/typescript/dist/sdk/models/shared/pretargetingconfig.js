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
exports.PretargetingConfigInput = exports.PretargetingConfig = exports.PretargetingConfigStateEnum = exports.PretargetingConfigInterstitialTargetingEnum = exports.PretargetingConfigIncludedUserIdTypesEnum = exports.PretargetingConfigIncludedPlatformsEnum = exports.PretargetingConfigIncludedFormatsEnum = exports.PretargetingConfigIncludedEnvironmentsEnum = exports.PretargetingConfigAllowedUserTargetingModesEnum = void 0;
var utils_1 = require("../../../internal/utils");
var apptargeting_1 = require("./apptargeting");
var numerictargetingdimension_1 = require("./numerictargetingdimension");
var creativedimensions_1 = require("./creativedimensions");
var stringtargetingdimension_1 = require("./stringtargetingdimension");
var PretargetingConfigAllowedUserTargetingModesEnum;
(function (PretargetingConfigAllowedUserTargetingModesEnum) {
    PretargetingConfigAllowedUserTargetingModesEnum["UserTargetingModeUnspecified"] = "USER_TARGETING_MODE_UNSPECIFIED";
    PretargetingConfigAllowedUserTargetingModesEnum["RemarketingAds"] = "REMARKETING_ADS";
    PretargetingConfigAllowedUserTargetingModesEnum["InterestBasedTargeting"] = "INTEREST_BASED_TARGETING";
})(PretargetingConfigAllowedUserTargetingModesEnum = exports.PretargetingConfigAllowedUserTargetingModesEnum || (exports.PretargetingConfigAllowedUserTargetingModesEnum = {}));
var PretargetingConfigIncludedEnvironmentsEnum;
(function (PretargetingConfigIncludedEnvironmentsEnum) {
    PretargetingConfigIncludedEnvironmentsEnum["EnvironmentUnspecified"] = "ENVIRONMENT_UNSPECIFIED";
    PretargetingConfigIncludedEnvironmentsEnum["App"] = "APP";
    PretargetingConfigIncludedEnvironmentsEnum["Web"] = "WEB";
})(PretargetingConfigIncludedEnvironmentsEnum = exports.PretargetingConfigIncludedEnvironmentsEnum || (exports.PretargetingConfigIncludedEnvironmentsEnum = {}));
var PretargetingConfigIncludedFormatsEnum;
(function (PretargetingConfigIncludedFormatsEnum) {
    PretargetingConfigIncludedFormatsEnum["CreativeFormatUnspecified"] = "CREATIVE_FORMAT_UNSPECIFIED";
    PretargetingConfigIncludedFormatsEnum["Html"] = "HTML";
    PretargetingConfigIncludedFormatsEnum["Vast"] = "VAST";
    PretargetingConfigIncludedFormatsEnum["Native"] = "NATIVE";
})(PretargetingConfigIncludedFormatsEnum = exports.PretargetingConfigIncludedFormatsEnum || (exports.PretargetingConfigIncludedFormatsEnum = {}));
var PretargetingConfigIncludedPlatformsEnum;
(function (PretargetingConfigIncludedPlatformsEnum) {
    PretargetingConfigIncludedPlatformsEnum["PlatformUnspecified"] = "PLATFORM_UNSPECIFIED";
    PretargetingConfigIncludedPlatformsEnum["PersonalComputer"] = "PERSONAL_COMPUTER";
    PretargetingConfigIncludedPlatformsEnum["Phone"] = "PHONE";
    PretargetingConfigIncludedPlatformsEnum["Tablet"] = "TABLET";
    PretargetingConfigIncludedPlatformsEnum["ConnectedTv"] = "CONNECTED_TV";
})(PretargetingConfigIncludedPlatformsEnum = exports.PretargetingConfigIncludedPlatformsEnum || (exports.PretargetingConfigIncludedPlatformsEnum = {}));
var PretargetingConfigIncludedUserIdTypesEnum;
(function (PretargetingConfigIncludedUserIdTypesEnum) {
    PretargetingConfigIncludedUserIdTypesEnum["UserIdTypeUnspecified"] = "USER_ID_TYPE_UNSPECIFIED";
    PretargetingConfigIncludedUserIdTypesEnum["HostedMatchData"] = "HOSTED_MATCH_DATA";
    PretargetingConfigIncludedUserIdTypesEnum["GoogleCookie"] = "GOOGLE_COOKIE";
    PretargetingConfigIncludedUserIdTypesEnum["DeviceId"] = "DEVICE_ID";
})(PretargetingConfigIncludedUserIdTypesEnum = exports.PretargetingConfigIncludedUserIdTypesEnum || (exports.PretargetingConfigIncludedUserIdTypesEnum = {}));
var PretargetingConfigInterstitialTargetingEnum;
(function (PretargetingConfigInterstitialTargetingEnum) {
    PretargetingConfigInterstitialTargetingEnum["InterstitialTargetingUnspecified"] = "INTERSTITIAL_TARGETING_UNSPECIFIED";
    PretargetingConfigInterstitialTargetingEnum["OnlyInterstitialRequests"] = "ONLY_INTERSTITIAL_REQUESTS";
    PretargetingConfigInterstitialTargetingEnum["OnlyNonInterstitialRequests"] = "ONLY_NON_INTERSTITIAL_REQUESTS";
})(PretargetingConfigInterstitialTargetingEnum = exports.PretargetingConfigInterstitialTargetingEnum || (exports.PretargetingConfigInterstitialTargetingEnum = {}));
var PretargetingConfigStateEnum;
(function (PretargetingConfigStateEnum) {
    PretargetingConfigStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    PretargetingConfigStateEnum["Active"] = "ACTIVE";
    PretargetingConfigStateEnum["Suspended"] = "SUSPENDED";
})(PretargetingConfigStateEnum = exports.PretargetingConfigStateEnum || (exports.PretargetingConfigStateEnum = {}));
// PretargetingConfig
/**
 * Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for.
**/
var PretargetingConfig = /** @class */ (function (_super) {
    __extends(PretargetingConfig, _super);
    function PretargetingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowedUserTargetingModes" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "allowedUserTargetingModes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appTargeting" }),
        __metadata("design:type", apptargeting_1.AppTargeting)
    ], PretargetingConfig.prototype, "appTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingId" }),
        __metadata("design:type", String)
    ], PretargetingConfig.prototype, "billingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PretargetingConfig.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=excludedContentLabelIds" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "excludedContentLabelIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=geoTargeting" }),
        __metadata("design:type", numerictargetingdimension_1.NumericTargetingDimension)
    ], PretargetingConfig.prototype, "geoTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedCreativeDimensions", elemType: creativedimensions_1.CreativeDimensions }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "includedCreativeDimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedEnvironments" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "includedEnvironments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedFormats" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "includedFormats", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedLanguages" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "includedLanguages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedMobileOperatingSystemIds" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "includedMobileOperatingSystemIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedPlatforms" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "includedPlatforms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedUserIdTypes" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "includedUserIdTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interstitialTargeting" }),
        __metadata("design:type", String)
    ], PretargetingConfig.prototype, "interstitialTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invalidGeoIds" }),
        __metadata("design:type", Array)
    ], PretargetingConfig.prototype, "invalidGeoIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximumQps" }),
        __metadata("design:type", String)
    ], PretargetingConfig.prototype, "maximumQps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimumViewabilityDecile" }),
        __metadata("design:type", Number)
    ], PretargetingConfig.prototype, "minimumViewabilityDecile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PretargetingConfig.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisherTargeting" }),
        __metadata("design:type", stringtargetingdimension_1.StringTargetingDimension)
    ], PretargetingConfig.prototype, "publisherTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], PretargetingConfig.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userListTargeting" }),
        __metadata("design:type", numerictargetingdimension_1.NumericTargetingDimension)
    ], PretargetingConfig.prototype, "userListTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verticalTargeting" }),
        __metadata("design:type", numerictargetingdimension_1.NumericTargetingDimension)
    ], PretargetingConfig.prototype, "verticalTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webTargeting" }),
        __metadata("design:type", stringtargetingdimension_1.StringTargetingDimension)
    ], PretargetingConfig.prototype, "webTargeting", void 0);
    return PretargetingConfig;
}(utils_1.SpeakeasyBase));
exports.PretargetingConfig = PretargetingConfig;
// PretargetingConfigInput
/**
 * Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for.
**/
var PretargetingConfigInput = /** @class */ (function (_super) {
    __extends(PretargetingConfigInput, _super);
    function PretargetingConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowedUserTargetingModes" }),
        __metadata("design:type", Array)
    ], PretargetingConfigInput.prototype, "allowedUserTargetingModes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appTargeting" }),
        __metadata("design:type", apptargeting_1.AppTargeting)
    ], PretargetingConfigInput.prototype, "appTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PretargetingConfigInput.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=excludedContentLabelIds" }),
        __metadata("design:type", Array)
    ], PretargetingConfigInput.prototype, "excludedContentLabelIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=geoTargeting" }),
        __metadata("design:type", numerictargetingdimension_1.NumericTargetingDimension)
    ], PretargetingConfigInput.prototype, "geoTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedCreativeDimensions", elemType: creativedimensions_1.CreativeDimensions }),
        __metadata("design:type", Array)
    ], PretargetingConfigInput.prototype, "includedCreativeDimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedEnvironments" }),
        __metadata("design:type", Array)
    ], PretargetingConfigInput.prototype, "includedEnvironments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedFormats" }),
        __metadata("design:type", Array)
    ], PretargetingConfigInput.prototype, "includedFormats", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedLanguages" }),
        __metadata("design:type", Array)
    ], PretargetingConfigInput.prototype, "includedLanguages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedMobileOperatingSystemIds" }),
        __metadata("design:type", Array)
    ], PretargetingConfigInput.prototype, "includedMobileOperatingSystemIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedPlatforms" }),
        __metadata("design:type", Array)
    ], PretargetingConfigInput.prototype, "includedPlatforms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedUserIdTypes" }),
        __metadata("design:type", Array)
    ], PretargetingConfigInput.prototype, "includedUserIdTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interstitialTargeting" }),
        __metadata("design:type", String)
    ], PretargetingConfigInput.prototype, "interstitialTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximumQps" }),
        __metadata("design:type", String)
    ], PretargetingConfigInput.prototype, "maximumQps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimumViewabilityDecile" }),
        __metadata("design:type", Number)
    ], PretargetingConfigInput.prototype, "minimumViewabilityDecile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisherTargeting" }),
        __metadata("design:type", stringtargetingdimension_1.StringTargetingDimension)
    ], PretargetingConfigInput.prototype, "publisherTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userListTargeting" }),
        __metadata("design:type", numerictargetingdimension_1.NumericTargetingDimension)
    ], PretargetingConfigInput.prototype, "userListTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verticalTargeting" }),
        __metadata("design:type", numerictargetingdimension_1.NumericTargetingDimension)
    ], PretargetingConfigInput.prototype, "verticalTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webTargeting" }),
        __metadata("design:type", stringtargetingdimension_1.StringTargetingDimension)
    ], PretargetingConfigInput.prototype, "webTargeting", void 0);
    return PretargetingConfigInput;
}(utils_1.SpeakeasyBase));
exports.PretargetingConfigInput = PretargetingConfigInput;
