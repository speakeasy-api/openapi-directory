"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.DoubleVerify = exports.DoubleVerifyAvoidedAgeRatingsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var doubleverifyappstarrating_1 = require("./doubleverifyappstarrating");
var doubleverifybrandsafetycategories_1 = require("./doubleverifybrandsafetycategories");
var doubleverifydisplayviewability_1 = require("./doubleverifydisplayviewability");
var doubleverifyfraudinvalidtraffic_1 = require("./doubleverifyfraudinvalidtraffic");
var doubleverifyvideoviewability_1 = require("./doubleverifyvideoviewability");
var class_transformer_1 = require("class-transformer");
var DoubleVerifyAvoidedAgeRatingsEnum;
(function (DoubleVerifyAvoidedAgeRatingsEnum) {
    DoubleVerifyAvoidedAgeRatingsEnum["AgeRatingUnspecified"] = "AGE_RATING_UNSPECIFIED";
    DoubleVerifyAvoidedAgeRatingsEnum["AppAgeRateUnknown"] = "APP_AGE_RATE_UNKNOWN";
    DoubleVerifyAvoidedAgeRatingsEnum["AppAgeRate4Plus"] = "APP_AGE_RATE_4_PLUS";
    DoubleVerifyAvoidedAgeRatingsEnum["AppAgeRate9Plus"] = "APP_AGE_RATE_9_PLUS";
    DoubleVerifyAvoidedAgeRatingsEnum["AppAgeRate12Plus"] = "APP_AGE_RATE_12_PLUS";
    DoubleVerifyAvoidedAgeRatingsEnum["AppAgeRate17Plus"] = "APP_AGE_RATE_17_PLUS";
    DoubleVerifyAvoidedAgeRatingsEnum["AppAgeRate18Plus"] = "APP_AGE_RATE_18_PLUS";
})(DoubleVerifyAvoidedAgeRatingsEnum = exports.DoubleVerifyAvoidedAgeRatingsEnum || (exports.DoubleVerifyAvoidedAgeRatingsEnum = {}));
/**
 * Details of DoubleVerify settings.
 */
var DoubleVerify = /** @class */ (function (_super) {
    __extends(DoubleVerify, _super);
    function DoubleVerify() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "appStarRating" }),
        (0, class_transformer_1.Type)(function () { return doubleverifyappstarrating_1.DoubleVerifyAppStarRating; }),
        __metadata("design:type", doubleverifyappstarrating_1.DoubleVerifyAppStarRating)
    ], DoubleVerify.prototype, "appStarRating", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "avoidedAgeRatings" }),
        __metadata("design:type", Array)
    ], DoubleVerify.prototype, "avoidedAgeRatings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "brandSafetyCategories" }),
        (0, class_transformer_1.Type)(function () { return doubleverifybrandsafetycategories_1.DoubleVerifyBrandSafetyCategories; }),
        __metadata("design:type", doubleverifybrandsafetycategories_1.DoubleVerifyBrandSafetyCategories)
    ], DoubleVerify.prototype, "brandSafetyCategories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "customSegmentId" }),
        __metadata("design:type", String)
    ], DoubleVerify.prototype, "customSegmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "displayViewability" }),
        (0, class_transformer_1.Type)(function () { return doubleverifydisplayviewability_1.DoubleVerifyDisplayViewability; }),
        __metadata("design:type", doubleverifydisplayviewability_1.DoubleVerifyDisplayViewability)
    ], DoubleVerify.prototype, "displayViewability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "fraudInvalidTraffic" }),
        (0, class_transformer_1.Type)(function () { return doubleverifyfraudinvalidtraffic_1.DoubleVerifyFraudInvalidTraffic; }),
        __metadata("design:type", doubleverifyfraudinvalidtraffic_1.DoubleVerifyFraudInvalidTraffic)
    ], DoubleVerify.prototype, "fraudInvalidTraffic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "videoViewability" }),
        (0, class_transformer_1.Type)(function () { return doubleverifyvideoviewability_1.DoubleVerifyVideoViewability; }),
        __metadata("design:type", doubleverifyvideoviewability_1.DoubleVerifyVideoViewability)
    ], DoubleVerify.prototype, "videoViewability", void 0);
    return DoubleVerify;
}(utils_1.SpeakeasyBase));
exports.DoubleVerify = DoubleVerify;
