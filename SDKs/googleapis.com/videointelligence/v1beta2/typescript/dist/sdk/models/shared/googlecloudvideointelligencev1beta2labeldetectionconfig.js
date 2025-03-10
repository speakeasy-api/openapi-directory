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
exports.GoogleCloudVideointelligenceV1beta2LabelDetectionConfig = exports.GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
/**
 * What labels should be detected with LABEL_DETECTION, in addition to video-level labels or segment-level labels. If unspecified, defaults to `SHOT_MODE`.
 */
var GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum;
(function (GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum) {
    GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum["LabelDetectionModeUnspecified"] = "LABEL_DETECTION_MODE_UNSPECIFIED";
    GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum["ShotMode"] = "SHOT_MODE";
    GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum["FrameMode"] = "FRAME_MODE";
    GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum["ShotAndFrameMode"] = "SHOT_AND_FRAME_MODE";
})(GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum = exports.GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum || (exports.GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum = {}));
/**
 * Config for LABEL_DETECTION.
 */
var GoogleCloudVideointelligenceV1beta2LabelDetectionConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudVideointelligenceV1beta2LabelDetectionConfig, _super);
    function GoogleCloudVideointelligenceV1beta2LabelDetectionConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "frameConfidenceThreshold" }),
        __metadata("design:type", Number)
    ], GoogleCloudVideointelligenceV1beta2LabelDetectionConfig.prototype, "frameConfidenceThreshold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "labelDetectionMode" }),
        __metadata("design:type", String)
    ], GoogleCloudVideointelligenceV1beta2LabelDetectionConfig.prototype, "labelDetectionMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "model" }),
        __metadata("design:type", String)
    ], GoogleCloudVideointelligenceV1beta2LabelDetectionConfig.prototype, "model", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "stationaryCamera" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudVideointelligenceV1beta2LabelDetectionConfig.prototype, "stationaryCamera", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "videoConfidenceThreshold" }),
        __metadata("design:type", Number)
    ], GoogleCloudVideointelligenceV1beta2LabelDetectionConfig.prototype, "videoConfidenceThreshold", void 0);
    return GoogleCloudVideointelligenceV1beta2LabelDetectionConfig;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudVideointelligenceV1beta2LabelDetectionConfig = GoogleCloudVideointelligenceV1beta2LabelDetectionConfig;
