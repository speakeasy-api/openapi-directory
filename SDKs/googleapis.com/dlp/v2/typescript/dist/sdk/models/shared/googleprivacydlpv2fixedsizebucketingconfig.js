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
exports.GooglePrivacyDlpV2FixedSizeBucketingConfig = void 0;
var utils_1 = require("../../../internal/utils");
var googleprivacydlpv2value_1 = require("./googleprivacydlpv2value");
// GooglePrivacyDlpV2FixedSizeBucketingConfig
/**
 * Buckets values based on fixed size ranges. The Bucketing transformation can provide all of this functionality, but requires more configuration. This message is provided as a convenience to the user for simple bucketing strategies. The transformed value will be a hyphenated string of {lower_bound}-{upper_bound}. For example, if lower_bound = 10 and upper_bound = 20, all values that are within this bucket will be replaced with "10-20". This can be used on data of type: double, long. If the bound Value type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
**/
var GooglePrivacyDlpV2FixedSizeBucketingConfig = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2FixedSizeBucketingConfig, _super);
    function GooglePrivacyDlpV2FixedSizeBucketingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bucketSize" }),
        __metadata("design:type", Number)
    ], GooglePrivacyDlpV2FixedSizeBucketingConfig.prototype, "bucketSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lowerBound" }),
        __metadata("design:type", googleprivacydlpv2value_1.GooglePrivacyDlpV2Value)
    ], GooglePrivacyDlpV2FixedSizeBucketingConfig.prototype, "lowerBound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upperBound" }),
        __metadata("design:type", googleprivacydlpv2value_1.GooglePrivacyDlpV2Value)
    ], GooglePrivacyDlpV2FixedSizeBucketingConfig.prototype, "upperBound", void 0);
    return GooglePrivacyDlpV2FixedSizeBucketingConfig;
}(utils_1.SpeakeasyBase));
exports.GooglePrivacyDlpV2FixedSizeBucketingConfig = GooglePrivacyDlpV2FixedSizeBucketingConfig;
