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
exports.GooglePrivacyDlpV2CustomInfoType = exports.GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum = exports.GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googleprivacydlpv2detectionrule_1 = require("./googleprivacydlpv2detectionrule");
var googleprivacydlpv2dictionary_1 = require("./googleprivacydlpv2dictionary");
var googleprivacydlpv2infotype_1 = require("./googleprivacydlpv2infotype");
var googleprivacydlpv2regex_1 = require("./googleprivacydlpv2regex");
var googleprivacydlpv2storedtype_1 = require("./googleprivacydlpv2storedtype");
var GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum;
(function (GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum) {
    GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum["ExclusionTypeUnspecified"] = "EXCLUSION_TYPE_UNSPECIFIED";
    GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum["ExclusionTypeExclude"] = "EXCLUSION_TYPE_EXCLUDE";
})(GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum = exports.GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum || (exports.GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum = {}));
var GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum;
(function (GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum) {
    GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum["LikelihoodUnspecified"] = "LIKELIHOOD_UNSPECIFIED";
    GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum["Unlikely"] = "UNLIKELY";
    GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum["Possible"] = "POSSIBLE";
    GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum["Likely"] = "LIKELY";
    GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum["VeryLikely"] = "VERY_LIKELY";
})(GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum = exports.GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum || (exports.GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum = {}));
// GooglePrivacyDlpV2CustomInfoType
/**
 * Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question.
**/
var GooglePrivacyDlpV2CustomInfoType = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2CustomInfoType, _super);
    function GooglePrivacyDlpV2CustomInfoType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detectionRules", elemType: googleprivacydlpv2detectionrule_1.GooglePrivacyDlpV2DetectionRule }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2CustomInfoType.prototype, "detectionRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dictionary" }),
        __metadata("design:type", googleprivacydlpv2dictionary_1.GooglePrivacyDlpV2Dictionary)
    ], GooglePrivacyDlpV2CustomInfoType.prototype, "dictionary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exclusionType" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2CustomInfoType.prototype, "exclusionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=infoType" }),
        __metadata("design:type", googleprivacydlpv2infotype_1.GooglePrivacyDlpV2InfoType)
    ], GooglePrivacyDlpV2CustomInfoType.prototype, "infoType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=likelihood" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2CustomInfoType.prototype, "likelihood", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regex" }),
        __metadata("design:type", googleprivacydlpv2regex_1.GooglePrivacyDlpV2Regex)
    ], GooglePrivacyDlpV2CustomInfoType.prototype, "regex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storedType" }),
        __metadata("design:type", googleprivacydlpv2storedtype_1.GooglePrivacyDlpV2StoredType)
    ], GooglePrivacyDlpV2CustomInfoType.prototype, "storedType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=surrogateType" }),
        __metadata("design:type", Object)
    ], GooglePrivacyDlpV2CustomInfoType.prototype, "surrogateType", void 0);
    return GooglePrivacyDlpV2CustomInfoType;
}(utils_1.SpeakeasyBase));
exports.GooglePrivacyDlpV2CustomInfoType = GooglePrivacyDlpV2CustomInfoType;
