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
exports.GoogleCloudDatalabelingV1beta1LabelVideoRequest = exports.GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googleclouddatalabelingv1beta1eventconfig_1 = require("./googleclouddatalabelingv1beta1eventconfig");
var googleclouddatalabelingv1beta1humanannotationconfig_1 = require("./googleclouddatalabelingv1beta1humanannotationconfig");
var googleclouddatalabelingv1beta1objectdetectionconfig_1 = require("./googleclouddatalabelingv1beta1objectdetectionconfig");
var googleclouddatalabelingv1beta1objecttrackingconfig_1 = require("./googleclouddatalabelingv1beta1objecttrackingconfig");
var googleclouddatalabelingv1beta1videoclassificationconfig_1 = require("./googleclouddatalabelingv1beta1videoclassificationconfig");
var class_transformer_1 = require("class-transformer");
/**
 * Required. The type of video labeling task.
 */
var GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum;
(function (GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum) {
    GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum["FeatureUnspecified"] = "FEATURE_UNSPECIFIED";
    GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum["Classification"] = "CLASSIFICATION";
    GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum["ObjectDetection"] = "OBJECT_DETECTION";
    GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum["ObjectTracking"] = "OBJECT_TRACKING";
    GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum["Event"] = "EVENT";
})(GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum = exports.GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum || (exports.GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum = {}));
/**
 * Request message for LabelVideo.
 */
var GoogleCloudDatalabelingV1beta1LabelVideoRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1LabelVideoRequest, _super);
    function GoogleCloudDatalabelingV1beta1LabelVideoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "basicConfig" }),
        (0, class_transformer_1.Type)(function () { return googleclouddatalabelingv1beta1humanannotationconfig_1.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig; }),
        __metadata("design:type", googleclouddatalabelingv1beta1humanannotationconfig_1.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig)
    ], GoogleCloudDatalabelingV1beta1LabelVideoRequest.prototype, "basicConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "eventConfig" }),
        (0, class_transformer_1.Type)(function () { return googleclouddatalabelingv1beta1eventconfig_1.GoogleCloudDatalabelingV1beta1EventConfig; }),
        __metadata("design:type", googleclouddatalabelingv1beta1eventconfig_1.GoogleCloudDatalabelingV1beta1EventConfig)
    ], GoogleCloudDatalabelingV1beta1LabelVideoRequest.prototype, "eventConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "feature" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1LabelVideoRequest.prototype, "feature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "objectDetectionConfig" }),
        (0, class_transformer_1.Type)(function () { return googleclouddatalabelingv1beta1objectdetectionconfig_1.GoogleCloudDatalabelingV1beta1ObjectDetectionConfig; }),
        __metadata("design:type", googleclouddatalabelingv1beta1objectdetectionconfig_1.GoogleCloudDatalabelingV1beta1ObjectDetectionConfig)
    ], GoogleCloudDatalabelingV1beta1LabelVideoRequest.prototype, "objectDetectionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "objectTrackingConfig" }),
        (0, class_transformer_1.Type)(function () { return googleclouddatalabelingv1beta1objecttrackingconfig_1.GoogleCloudDatalabelingV1beta1ObjectTrackingConfig; }),
        __metadata("design:type", googleclouddatalabelingv1beta1objecttrackingconfig_1.GoogleCloudDatalabelingV1beta1ObjectTrackingConfig)
    ], GoogleCloudDatalabelingV1beta1LabelVideoRequest.prototype, "objectTrackingConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "videoClassificationConfig" }),
        (0, class_transformer_1.Type)(function () { return googleclouddatalabelingv1beta1videoclassificationconfig_1.GoogleCloudDatalabelingV1beta1VideoClassificationConfig; }),
        __metadata("design:type", googleclouddatalabelingv1beta1videoclassificationconfig_1.GoogleCloudDatalabelingV1beta1VideoClassificationConfig)
    ], GoogleCloudDatalabelingV1beta1LabelVideoRequest.prototype, "videoClassificationConfig", void 0);
    return GoogleCloudDatalabelingV1beta1LabelVideoRequest;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudDatalabelingV1beta1LabelVideoRequest = GoogleCloudDatalabelingV1beta1LabelVideoRequest;
