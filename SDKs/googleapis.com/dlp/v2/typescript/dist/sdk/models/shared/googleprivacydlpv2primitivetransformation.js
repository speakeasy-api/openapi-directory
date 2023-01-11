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
exports.GooglePrivacyDlpV2PrimitiveTransformation = void 0;
var utils_1 = require("../../../internal/utils");
var googleprivacydlpv2bucketingconfig_1 = require("./googleprivacydlpv2bucketingconfig");
var googleprivacydlpv2charactermaskconfig_1 = require("./googleprivacydlpv2charactermaskconfig");
var googleprivacydlpv2cryptodeterministicconfig_1 = require("./googleprivacydlpv2cryptodeterministicconfig");
var googleprivacydlpv2cryptohashconfig_1 = require("./googleprivacydlpv2cryptohashconfig");
var googleprivacydlpv2cryptoreplaceffxfpeconfig_1 = require("./googleprivacydlpv2cryptoreplaceffxfpeconfig");
var googleprivacydlpv2dateshiftconfig_1 = require("./googleprivacydlpv2dateshiftconfig");
var googleprivacydlpv2fixedsizebucketingconfig_1 = require("./googleprivacydlpv2fixedsizebucketingconfig");
var googleprivacydlpv2replacevalueconfig_1 = require("./googleprivacydlpv2replacevalueconfig");
var googleprivacydlpv2replacedictionaryconfig_1 = require("./googleprivacydlpv2replacedictionaryconfig");
var googleprivacydlpv2timepartconfig_1 = require("./googleprivacydlpv2timepartconfig");
// GooglePrivacyDlpV2PrimitiveTransformation
/**
 * A rule for transforming a value.
**/
var GooglePrivacyDlpV2PrimitiveTransformation = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2PrimitiveTransformation, _super);
    function GooglePrivacyDlpV2PrimitiveTransformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bucketingConfig" }),
        __metadata("design:type", googleprivacydlpv2bucketingconfig_1.GooglePrivacyDlpV2BucketingConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "bucketingConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=characterMaskConfig" }),
        __metadata("design:type", googleprivacydlpv2charactermaskconfig_1.GooglePrivacyDlpV2CharacterMaskConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "characterMaskConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cryptoDeterministicConfig" }),
        __metadata("design:type", googleprivacydlpv2cryptodeterministicconfig_1.GooglePrivacyDlpV2CryptoDeterministicConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "cryptoDeterministicConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cryptoHashConfig" }),
        __metadata("design:type", googleprivacydlpv2cryptohashconfig_1.GooglePrivacyDlpV2CryptoHashConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "cryptoHashConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cryptoReplaceFfxFpeConfig" }),
        __metadata("design:type", googleprivacydlpv2cryptoreplaceffxfpeconfig_1.GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "cryptoReplaceFfxFpeConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateShiftConfig" }),
        __metadata("design:type", googleprivacydlpv2dateshiftconfig_1.GooglePrivacyDlpV2DateShiftConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "dateShiftConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fixedSizeBucketingConfig" }),
        __metadata("design:type", googleprivacydlpv2fixedsizebucketingconfig_1.GooglePrivacyDlpV2FixedSizeBucketingConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "fixedSizeBucketingConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=redactConfig" }),
        __metadata("design:type", Object)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "redactConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replaceConfig" }),
        __metadata("design:type", googleprivacydlpv2replacevalueconfig_1.GooglePrivacyDlpV2ReplaceValueConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "replaceConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replaceDictionaryConfig" }),
        __metadata("design:type", googleprivacydlpv2replacedictionaryconfig_1.GooglePrivacyDlpV2ReplaceDictionaryConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "replaceDictionaryConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replaceWithInfoTypeConfig" }),
        __metadata("design:type", Object)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "replaceWithInfoTypeConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timePartConfig" }),
        __metadata("design:type", googleprivacydlpv2timepartconfig_1.GooglePrivacyDlpV2TimePartConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "timePartConfig", void 0);
    return GooglePrivacyDlpV2PrimitiveTransformation;
}(utils_1.SpeakeasyBase));
exports.GooglePrivacyDlpV2PrimitiveTransformation = GooglePrivacyDlpV2PrimitiveTransformation;
