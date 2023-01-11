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
exports.CreateNetworkGroupPolicyResponse = exports.CreateNetworkGroupPolicyRequest = exports.CreateNetworkGroupPolicyRequestBody = exports.CreateNetworkGroupPolicyRequestBodyVlanTagging = exports.CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodyScheduling = exports.CreateNetworkGroupPolicyRequestBodySchedulingWednesday = exports.CreateNetworkGroupPolicyRequestBodySchedulingTuesday = exports.CreateNetworkGroupPolicyRequestBodySchedulingThursday = exports.CreateNetworkGroupPolicyRequestBodySchedulingSunday = exports.CreateNetworkGroupPolicyRequestBodySchedulingSaturday = exports.CreateNetworkGroupPolicyRequestBodySchedulingMonday = exports.CreateNetworkGroupPolicyRequestBodySchedulingFriday = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules = exports.CreateNetworkGroupPolicyRequestBodyContentFiltering = exports.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns = exports.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories = exports.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns = exports.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodyBonjourForwarding = exports.CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules = exports.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = exports.CreateNetworkGroupPolicyRequestBodyBandwidth = exports.CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits = exports.CreateNetworkGroupPolicyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateNetworkGroupPolicyPathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyPathParams, _super);
    function CreateNetworkGroupPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyPathParams.prototype, "networkId", void 0);
    return CreateNetworkGroupPolicyPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyPathParams = CreateNetworkGroupPolicyPathParams;
// CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits
/**
 * The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
**/
var CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits, _super);
    function CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limitDown" }),
        __metadata("design:type", Number)
    ], CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits.prototype, "limitDown", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limitUp" }),
        __metadata("design:type", Number)
    ], CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits.prototype, "limitUp", void 0);
    return CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits = CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
var CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
(function (CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum) {
    CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum["NetworkDefault"] = "network default";
    CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum["Ignore"] = "ignore";
    CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum["Custom"] = "custom";
})(CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum || (exports.CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = {}));
// CreateNetworkGroupPolicyRequestBodyBandwidth
/**
 *     The bandwidth settings for clients bound to your group policy.
 *
**/
var CreateNetworkGroupPolicyRequestBodyBandwidth = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyBandwidth, _super);
    function CreateNetworkGroupPolicyRequestBodyBandwidth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bandwidthLimits" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits)
    ], CreateNetworkGroupPolicyRequestBodyBandwidth.prototype, "bandwidthLimits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyBandwidth.prototype, "settings", void 0);
    return CreateNetworkGroupPolicyRequestBodyBandwidth;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyBandwidth = CreateNetworkGroupPolicyRequestBodyBandwidth;
var CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum;
(function (CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum) {
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["AllServices"] = "All Services";
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["AirPlay"] = "AirPlay";
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["Afp"] = "AFP";
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["BitTorrent"] = "BitTorrent";
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["Ftp"] = "FTP";
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["IChat"] = "iChat";
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["ITunes"] = "iTunes";
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["Printers"] = "Printers";
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["Samba"] = "Samba";
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["Scanners"] = "Scanners";
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["Ssh"] = "SSH";
})(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = exports.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum || (exports.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = {}));
var CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules, _super);
    function CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=services" }),
        __metadata("design:type", Array)
    ], CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules.prototype, "services", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vlanId" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules.prototype, "vlanId", void 0);
    return CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules = CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules;
var CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
(function (CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum) {
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum["NetworkDefault"] = "network default";
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum["Ignore"] = "ignore";
    CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum["Custom"] = "custom";
})(CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum || (exports.CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = {}));
// CreateNetworkGroupPolicyRequestBodyBonjourForwarding
/**
 * The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
**/
var CreateNetworkGroupPolicyRequestBodyBonjourForwarding = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyBonjourForwarding, _super);
    function CreateNetworkGroupPolicyRequestBodyBonjourForwarding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules }),
        __metadata("design:type", Array)
    ], CreateNetworkGroupPolicyRequestBodyBonjourForwarding.prototype, "rules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyBonjourForwarding.prototype, "settings", void 0);
    return CreateNetworkGroupPolicyRequestBodyBonjourForwarding;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyBonjourForwarding = CreateNetworkGroupPolicyRequestBodyBonjourForwarding;
var CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
(function (CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum) {
    CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum["NetworkDefault"] = "network default";
    CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum["Append"] = "append";
    CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum["Override"] = "override";
})(CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum || (exports.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum = {}));
// CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns
/**
 * Settings for allowed URL patterns
**/
var CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns, _super);
    function CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patterns" }),
        __metadata("design:type", Array)
    ], CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns.prototype, "patterns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns.prototype, "settings", void 0);
    return CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns = CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
var CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
(function (CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum) {
    CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum["NetworkDefault"] = "network default";
    CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum["Append"] = "append";
    CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum["Override"] = "override";
})(CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum || (exports.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum = {}));
// CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories
/**
 * Settings for blocked URL categories
**/
var CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories, _super);
    function CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories.prototype, "settings", void 0);
    return CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories = CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
var CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
(function (CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum) {
    CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum["NetworkDefault"] = "network default";
    CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum["Append"] = "append";
    CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum["Override"] = "override";
})(CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum || (exports.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum = {}));
// CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns
/**
 * Settings for blocked URL patterns
**/
var CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns, _super);
    function CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patterns" }),
        __metadata("design:type", Array)
    ], CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns.prototype, "patterns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns.prototype, "settings", void 0);
    return CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns = CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
// CreateNetworkGroupPolicyRequestBodyContentFiltering
/**
 * The content filtering settings for your group policy
**/
var CreateNetworkGroupPolicyRequestBodyContentFiltering = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyContentFiltering, _super);
    function CreateNetworkGroupPolicyRequestBodyContentFiltering() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowedUrlPatterns" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns)
    ], CreateNetworkGroupPolicyRequestBodyContentFiltering.prototype, "allowedUrlPatterns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=blockedUrlCategories" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories)
    ], CreateNetworkGroupPolicyRequestBodyContentFiltering.prototype, "blockedUrlCategories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=blockedUrlPatterns" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns)
    ], CreateNetworkGroupPolicyRequestBodyContentFiltering.prototype, "blockedUrlPatterns", void 0);
    return CreateNetworkGroupPolicyRequestBodyContentFiltering;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyContentFiltering = CreateNetworkGroupPolicyRequestBodyContentFiltering;
var CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules, _super);
    function CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destCidr" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules.prototype, "destCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destPort" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules.prototype, "destPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules.prototype, "protocol", void 0);
    return CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules;
var CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
(function (CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum) {
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum["Deny"] = "deny";
})(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum || (exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum = {}));
var CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
(function (CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum) {
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum["Application"] = "application";
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum["ApplicationCategory"] = "applicationCategory";
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum["Host"] = "host";
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum["Port"] = "port";
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum["IpRange"] = "ipRange";
})(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum || (exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = {}));
var CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules, _super);
    function CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules.prototype, "value", void 0);
    return CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules;
var CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
(function (CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum) {
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum["NetworkDefault"] = "network default";
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum["Ignore"] = "ignore";
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum["Custom"] = "custom";
})(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum || (exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum = {}));
var CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
(function (CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum) {
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum["Application"] = "application";
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum["ApplicationCategory"] = "applicationCategory";
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum["Host"] = "host";
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum["Port"] = "port";
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum["IpRange"] = "ipRange";
    CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum["LocalNet"] = "localNet";
})(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum || (exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = {}));
var CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions, _super);
    function CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions.prototype, "value", void 0);
    return CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions;
// CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits
/**
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
var CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits, _super);
    function CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limitDown" }),
        __metadata("design:type", Number)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits.prototype, "limitDown", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limitUp" }),
        __metadata("design:type", Number)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits.prototype, "limitUp", void 0);
    return CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
// CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits
/**
 *     An object describing the bandwidth settings for your rule.
 *
**/
var CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits, _super);
    function CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bandwidthLimits" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits.prototype, "bandwidthLimits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits.prototype, "settings", void 0);
    return CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
var CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules, _super);
    function CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=definitions", elemType: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions }),
        __metadata("design:type", Array)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules.prototype, "definitions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dscpTagValue" }),
        __metadata("design:type", Number)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules.prototype, "dscpTagValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pcpTagValue" }),
        __metadata("design:type", Number)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules.prototype, "pcpTagValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=perClientBandwidthLimits" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules.prototype, "perClientBandwidthLimits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules.prototype, "priority", void 0);
    return CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules;
// CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping
/**
 *     The firewall and traffic shaping rules and settings for your policy.
 *
**/
var CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping, _super);
    function CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=l3FirewallRules", elemType: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules }),
        __metadata("design:type", Array)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping.prototype, "l3FirewallRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=l7FirewallRules", elemType: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules }),
        __metadata("design:type", Array)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping.prototype, "l7FirewallRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trafficShapingRules", elemType: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules }),
        __metadata("design:type", Array)
    ], CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping.prototype, "trafficShapingRules", void 0);
    return CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
// CreateNetworkGroupPolicyRequestBodySchedulingFriday
/**
 * The schedule object for Friday.
**/
var CreateNetworkGroupPolicyRequestBodySchedulingFriday = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodySchedulingFriday, _super);
    function CreateNetworkGroupPolicyRequestBodySchedulingFriday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkGroupPolicyRequestBodySchedulingFriday.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodySchedulingFriday.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodySchedulingFriday.prototype, "to", void 0);
    return CreateNetworkGroupPolicyRequestBodySchedulingFriday;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodySchedulingFriday = CreateNetworkGroupPolicyRequestBodySchedulingFriday;
// CreateNetworkGroupPolicyRequestBodySchedulingMonday
/**
 * The schedule object for Monday.
**/
var CreateNetworkGroupPolicyRequestBodySchedulingMonday = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodySchedulingMonday, _super);
    function CreateNetworkGroupPolicyRequestBodySchedulingMonday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkGroupPolicyRequestBodySchedulingMonday.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodySchedulingMonday.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodySchedulingMonday.prototype, "to", void 0);
    return CreateNetworkGroupPolicyRequestBodySchedulingMonday;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodySchedulingMonday = CreateNetworkGroupPolicyRequestBodySchedulingMonday;
// CreateNetworkGroupPolicyRequestBodySchedulingSaturday
/**
 * The schedule object for Saturday.
**/
var CreateNetworkGroupPolicyRequestBodySchedulingSaturday = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodySchedulingSaturday, _super);
    function CreateNetworkGroupPolicyRequestBodySchedulingSaturday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkGroupPolicyRequestBodySchedulingSaturday.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodySchedulingSaturday.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodySchedulingSaturday.prototype, "to", void 0);
    return CreateNetworkGroupPolicyRequestBodySchedulingSaturday;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodySchedulingSaturday = CreateNetworkGroupPolicyRequestBodySchedulingSaturday;
// CreateNetworkGroupPolicyRequestBodySchedulingSunday
/**
 * The schedule object for Sunday.
**/
var CreateNetworkGroupPolicyRequestBodySchedulingSunday = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodySchedulingSunday, _super);
    function CreateNetworkGroupPolicyRequestBodySchedulingSunday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkGroupPolicyRequestBodySchedulingSunday.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodySchedulingSunday.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodySchedulingSunday.prototype, "to", void 0);
    return CreateNetworkGroupPolicyRequestBodySchedulingSunday;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodySchedulingSunday = CreateNetworkGroupPolicyRequestBodySchedulingSunday;
// CreateNetworkGroupPolicyRequestBodySchedulingThursday
/**
 * The schedule object for Thursday.
**/
var CreateNetworkGroupPolicyRequestBodySchedulingThursday = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodySchedulingThursday, _super);
    function CreateNetworkGroupPolicyRequestBodySchedulingThursday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkGroupPolicyRequestBodySchedulingThursday.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodySchedulingThursday.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodySchedulingThursday.prototype, "to", void 0);
    return CreateNetworkGroupPolicyRequestBodySchedulingThursday;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodySchedulingThursday = CreateNetworkGroupPolicyRequestBodySchedulingThursday;
// CreateNetworkGroupPolicyRequestBodySchedulingTuesday
/**
 * The schedule object for Tuesday.
**/
var CreateNetworkGroupPolicyRequestBodySchedulingTuesday = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodySchedulingTuesday, _super);
    function CreateNetworkGroupPolicyRequestBodySchedulingTuesday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkGroupPolicyRequestBodySchedulingTuesday.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodySchedulingTuesday.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodySchedulingTuesday.prototype, "to", void 0);
    return CreateNetworkGroupPolicyRequestBodySchedulingTuesday;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodySchedulingTuesday = CreateNetworkGroupPolicyRequestBodySchedulingTuesday;
// CreateNetworkGroupPolicyRequestBodySchedulingWednesday
/**
 * The schedule object for Wednesday.
**/
var CreateNetworkGroupPolicyRequestBodySchedulingWednesday = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodySchedulingWednesday, _super);
    function CreateNetworkGroupPolicyRequestBodySchedulingWednesday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkGroupPolicyRequestBodySchedulingWednesday.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodySchedulingWednesday.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodySchedulingWednesday.prototype, "to", void 0);
    return CreateNetworkGroupPolicyRequestBodySchedulingWednesday;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodySchedulingWednesday = CreateNetworkGroupPolicyRequestBodySchedulingWednesday;
// CreateNetworkGroupPolicyRequestBodyScheduling
/**
 *     The schedule for the group policy. Schedules are applied to days of the week.
 *
**/
var CreateNetworkGroupPolicyRequestBodyScheduling = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyScheduling, _super);
    function CreateNetworkGroupPolicyRequestBodyScheduling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkGroupPolicyRequestBodyScheduling.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=friday" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodySchedulingFriday)
    ], CreateNetworkGroupPolicyRequestBodyScheduling.prototype, "friday", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monday" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodySchedulingMonday)
    ], CreateNetworkGroupPolicyRequestBodyScheduling.prototype, "monday", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=saturday" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodySchedulingSaturday)
    ], CreateNetworkGroupPolicyRequestBodyScheduling.prototype, "saturday", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sunday" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodySchedulingSunday)
    ], CreateNetworkGroupPolicyRequestBodyScheduling.prototype, "sunday", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thursday" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodySchedulingThursday)
    ], CreateNetworkGroupPolicyRequestBodyScheduling.prototype, "thursday", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tuesday" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodySchedulingTuesday)
    ], CreateNetworkGroupPolicyRequestBodyScheduling.prototype, "tuesday", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wednesday" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodySchedulingWednesday)
    ], CreateNetworkGroupPolicyRequestBodyScheduling.prototype, "wednesday", void 0);
    return CreateNetworkGroupPolicyRequestBodyScheduling;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyScheduling = CreateNetworkGroupPolicyRequestBodyScheduling;
var CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
(function (CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum) {
    CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum["NetworkDefault"] = "network default";
    CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum["Bypass"] = "bypass";
})(CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum || (exports.CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum = {}));
var CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;
(function (CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum) {
    CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum["NetworkDefault"] = "network default";
    CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum["Ignore"] = "ignore";
    CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum["Custom"] = "custom";
})(CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum = exports.CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum || (exports.CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum = {}));
// CreateNetworkGroupPolicyRequestBodyVlanTagging
/**
 * The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
**/
var CreateNetworkGroupPolicyRequestBodyVlanTagging = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBodyVlanTagging, _super);
    function CreateNetworkGroupPolicyRequestBodyVlanTagging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyVlanTagging.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vlanId" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBodyVlanTagging.prototype, "vlanId", void 0);
    return CreateNetworkGroupPolicyRequestBodyVlanTagging;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBodyVlanTagging = CreateNetworkGroupPolicyRequestBodyVlanTagging;
var CreateNetworkGroupPolicyRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequestBody, _super);
    function CreateNetworkGroupPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bandwidth" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodyBandwidth)
    ], CreateNetworkGroupPolicyRequestBody.prototype, "bandwidth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bonjourForwarding" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodyBonjourForwarding)
    ], CreateNetworkGroupPolicyRequestBody.prototype, "bonjourForwarding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contentFiltering" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodyContentFiltering)
    ], CreateNetworkGroupPolicyRequestBody.prototype, "contentFiltering", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firewallAndTrafficShaping" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping)
    ], CreateNetworkGroupPolicyRequestBody.prototype, "firewallAndTrafficShaping", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheduling" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodyScheduling)
    ], CreateNetworkGroupPolicyRequestBody.prototype, "scheduling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=splashAuthSettings" }),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyRequestBody.prototype, "splashAuthSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vlanTagging" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBodyVlanTagging)
    ], CreateNetworkGroupPolicyRequestBody.prototype, "vlanTagging", void 0);
    return CreateNetworkGroupPolicyRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequestBody = CreateNetworkGroupPolicyRequestBody;
var CreateNetworkGroupPolicyRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyRequest, _super);
    function CreateNetworkGroupPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNetworkGroupPolicyPathParams)
    ], CreateNetworkGroupPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkGroupPolicyRequestBody)
    ], CreateNetworkGroupPolicyRequest.prototype, "request", void 0);
    return CreateNetworkGroupPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyRequest = CreateNetworkGroupPolicyRequest;
var CreateNetworkGroupPolicyResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkGroupPolicyResponse, _super);
    function CreateNetworkGroupPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateNetworkGroupPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateNetworkGroupPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkGroupPolicyResponse.prototype, "createNetworkGroupPolicy201ApplicationJSONObject", void 0);
    return CreateNetworkGroupPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkGroupPolicyResponse = CreateNetworkGroupPolicyResponse;
