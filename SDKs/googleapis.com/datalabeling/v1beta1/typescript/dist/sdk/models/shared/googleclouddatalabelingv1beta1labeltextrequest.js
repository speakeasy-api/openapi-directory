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
exports.GoogleCloudDatalabelingV1beta1LabelTextRequest = exports.GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googleclouddatalabelingv1beta1humanannotationconfig_1 = require("./googleclouddatalabelingv1beta1humanannotationconfig");
var googleclouddatalabelingv1beta1textclassificationconfig_1 = require("./googleclouddatalabelingv1beta1textclassificationconfig");
var googleclouddatalabelingv1beta1textentityextractionconfig_1 = require("./googleclouddatalabelingv1beta1textentityextractionconfig");
var GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum;
(function (GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum) {
    GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum["FeatureUnspecified"] = "FEATURE_UNSPECIFIED";
    GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum["TextClassification"] = "TEXT_CLASSIFICATION";
    GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum["TextEntityExtraction"] = "TEXT_ENTITY_EXTRACTION";
})(GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum = exports.GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum || (exports.GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum = {}));
// GoogleCloudDatalabelingV1beta1LabelTextRequest
/**
 * Request message for LabelText.
**/
var GoogleCloudDatalabelingV1beta1LabelTextRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1LabelTextRequest, _super);
    function GoogleCloudDatalabelingV1beta1LabelTextRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basicConfig" }),
        __metadata("design:type", googleclouddatalabelingv1beta1humanannotationconfig_1.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig)
    ], GoogleCloudDatalabelingV1beta1LabelTextRequest.prototype, "basicConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feature" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1LabelTextRequest.prototype, "feature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=textClassificationConfig" }),
        __metadata("design:type", googleclouddatalabelingv1beta1textclassificationconfig_1.GoogleCloudDatalabelingV1beta1TextClassificationConfig)
    ], GoogleCloudDatalabelingV1beta1LabelTextRequest.prototype, "textClassificationConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=textEntityExtractionConfig" }),
        __metadata("design:type", googleclouddatalabelingv1beta1textentityextractionconfig_1.GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig)
    ], GoogleCloudDatalabelingV1beta1LabelTextRequest.prototype, "textEntityExtractionConfig", void 0);
    return GoogleCloudDatalabelingV1beta1LabelTextRequest;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudDatalabelingV1beta1LabelTextRequest = GoogleCloudDatalabelingV1beta1LabelTextRequest;
