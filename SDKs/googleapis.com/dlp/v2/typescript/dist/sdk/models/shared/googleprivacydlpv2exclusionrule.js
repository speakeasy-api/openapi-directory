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
exports.GooglePrivacyDlpV2ExclusionRule = exports.GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googleprivacydlpv2dictionary_1 = require("./googleprivacydlpv2dictionary");
var googleprivacydlpv2excludebyhotword_1 = require("./googleprivacydlpv2excludebyhotword");
var googleprivacydlpv2excludeinfotypes_1 = require("./googleprivacydlpv2excludeinfotypes");
var googleprivacydlpv2regex_1 = require("./googleprivacydlpv2regex");
var GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum;
(function (GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum) {
    GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum["MatchingTypeUnspecified"] = "MATCHING_TYPE_UNSPECIFIED";
    GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum["MatchingTypeFullMatch"] = "MATCHING_TYPE_FULL_MATCH";
    GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum["MatchingTypePartialMatch"] = "MATCHING_TYPE_PARTIAL_MATCH";
    GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum["MatchingTypeInverseMatch"] = "MATCHING_TYPE_INVERSE_MATCH";
})(GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum = exports.GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum || (exports.GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum = {}));
// GooglePrivacyDlpV2ExclusionRule
/**
 * The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results.
**/
var GooglePrivacyDlpV2ExclusionRule = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2ExclusionRule, _super);
    function GooglePrivacyDlpV2ExclusionRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dictionary" }),
        __metadata("design:type", googleprivacydlpv2dictionary_1.GooglePrivacyDlpV2Dictionary)
    ], GooglePrivacyDlpV2ExclusionRule.prototype, "dictionary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=excludeByHotword" }),
        __metadata("design:type", googleprivacydlpv2excludebyhotword_1.GooglePrivacyDlpV2ExcludeByHotword)
    ], GooglePrivacyDlpV2ExclusionRule.prototype, "excludeByHotword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=excludeInfoTypes" }),
        __metadata("design:type", googleprivacydlpv2excludeinfotypes_1.GooglePrivacyDlpV2ExcludeInfoTypes)
    ], GooglePrivacyDlpV2ExclusionRule.prototype, "excludeInfoTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=matchingType" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2ExclusionRule.prototype, "matchingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regex" }),
        __metadata("design:type", googleprivacydlpv2regex_1.GooglePrivacyDlpV2Regex)
    ], GooglePrivacyDlpV2ExclusionRule.prototype, "regex", void 0);
    return GooglePrivacyDlpV2ExclusionRule;
}(utils_1.SpeakeasyBase));
exports.GooglePrivacyDlpV2ExclusionRule = GooglePrivacyDlpV2ExclusionRule;
