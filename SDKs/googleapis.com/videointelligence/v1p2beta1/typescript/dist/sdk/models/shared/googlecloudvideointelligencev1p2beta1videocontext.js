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
exports.GoogleCloudVideointelligenceV1p2beta1VideoContext = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudvideointelligencev1p2beta1explicitcontentdetectionconfig_1 = require("./googlecloudvideointelligencev1p2beta1explicitcontentdetectionconfig");
var googlecloudvideointelligencev1p2beta1facedetectionconfig_1 = require("./googlecloudvideointelligencev1p2beta1facedetectionconfig");
var googlecloudvideointelligencev1p2beta1labeldetectionconfig_1 = require("./googlecloudvideointelligencev1p2beta1labeldetectionconfig");
var googlecloudvideointelligencev1p2beta1objecttrackingconfig_1 = require("./googlecloudvideointelligencev1p2beta1objecttrackingconfig");
var googlecloudvideointelligencev1p2beta1persondetectionconfig_1 = require("./googlecloudvideointelligencev1p2beta1persondetectionconfig");
var googlecloudvideointelligencev1p2beta1videosegment_1 = require("./googlecloudvideointelligencev1p2beta1videosegment");
var googlecloudvideointelligencev1p2beta1shotchangedetectionconfig_1 = require("./googlecloudvideointelligencev1p2beta1shotchangedetectionconfig");
var googlecloudvideointelligencev1p2beta1speechtranscriptionconfig_1 = require("./googlecloudvideointelligencev1p2beta1speechtranscriptionconfig");
var googlecloudvideointelligencev1p2beta1textdetectionconfig_1 = require("./googlecloudvideointelligencev1p2beta1textdetectionconfig");
// GoogleCloudVideointelligenceV1p2beta1VideoContext
/**
 * Video context and/or feature-specific parameters.
**/
var GoogleCloudVideointelligenceV1p2beta1VideoContext = /** @class */ (function (_super) {
    __extends(GoogleCloudVideointelligenceV1p2beta1VideoContext, _super);
    function GoogleCloudVideointelligenceV1p2beta1VideoContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=explicitContentDetectionConfig" }),
        __metadata("design:type", googlecloudvideointelligencev1p2beta1explicitcontentdetectionconfig_1.GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig)
    ], GoogleCloudVideointelligenceV1p2beta1VideoContext.prototype, "explicitContentDetectionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=faceDetectionConfig" }),
        __metadata("design:type", googlecloudvideointelligencev1p2beta1facedetectionconfig_1.GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig)
    ], GoogleCloudVideointelligenceV1p2beta1VideoContext.prototype, "faceDetectionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labelDetectionConfig" }),
        __metadata("design:type", googlecloudvideointelligencev1p2beta1labeldetectionconfig_1.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig)
    ], GoogleCloudVideointelligenceV1p2beta1VideoContext.prototype, "labelDetectionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=objectTrackingConfig" }),
        __metadata("design:type", googlecloudvideointelligencev1p2beta1objecttrackingconfig_1.GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig)
    ], GoogleCloudVideointelligenceV1p2beta1VideoContext.prototype, "objectTrackingConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=personDetectionConfig" }),
        __metadata("design:type", googlecloudvideointelligencev1p2beta1persondetectionconfig_1.GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig)
    ], GoogleCloudVideointelligenceV1p2beta1VideoContext.prototype, "personDetectionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=segments", elemType: googlecloudvideointelligencev1p2beta1videosegment_1.GoogleCloudVideointelligenceV1p2beta1VideoSegment }),
        __metadata("design:type", Array)
    ], GoogleCloudVideointelligenceV1p2beta1VideoContext.prototype, "segments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shotChangeDetectionConfig" }),
        __metadata("design:type", googlecloudvideointelligencev1p2beta1shotchangedetectionconfig_1.GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig)
    ], GoogleCloudVideointelligenceV1p2beta1VideoContext.prototype, "shotChangeDetectionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=speechTranscriptionConfig" }),
        __metadata("design:type", googlecloudvideointelligencev1p2beta1speechtranscriptionconfig_1.GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig)
    ], GoogleCloudVideointelligenceV1p2beta1VideoContext.prototype, "speechTranscriptionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=textDetectionConfig" }),
        __metadata("design:type", googlecloudvideointelligencev1p2beta1textdetectionconfig_1.GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig)
    ], GoogleCloudVideointelligenceV1p2beta1VideoContext.prototype, "textDetectionConfig", void 0);
    return GoogleCloudVideointelligenceV1p2beta1VideoContext;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudVideointelligenceV1p2beta1VideoContext = GoogleCloudVideointelligenceV1p2beta1VideoContext;
