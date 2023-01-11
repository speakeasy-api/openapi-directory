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
exports.GoogleCloudContactcenterinsightsV1CallAnnotation = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudcontactcenterinsightsv1annotationboundary_1 = require("./googlecloudcontactcenterinsightsv1annotationboundary");
var googlecloudcontactcenterinsightsv1entitymentiondata_1 = require("./googlecloudcontactcenterinsightsv1entitymentiondata");
var googlecloudcontactcenterinsightsv1intentmatchdata_1 = require("./googlecloudcontactcenterinsightsv1intentmatchdata");
var googlecloudcontactcenterinsightsv1issuematchdata_1 = require("./googlecloudcontactcenterinsightsv1issuematchdata");
var googlecloudcontactcenterinsightsv1phrasematchdata_1 = require("./googlecloudcontactcenterinsightsv1phrasematchdata");
var googlecloudcontactcenterinsightsv1sentimentdata_1 = require("./googlecloudcontactcenterinsightsv1sentimentdata");
// GoogleCloudContactcenterinsightsV1CallAnnotation
/**
 * A piece of metadata that applies to a window of a call.
**/
var GoogleCloudContactcenterinsightsV1CallAnnotation = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1CallAnnotation, _super);
    function GoogleCloudContactcenterinsightsV1CallAnnotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotationEndBoundary" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1annotationboundary_1.GoogleCloudContactcenterinsightsV1AnnotationBoundary)
    ], GoogleCloudContactcenterinsightsV1CallAnnotation.prototype, "annotationEndBoundary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotationStartBoundary" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1annotationboundary_1.GoogleCloudContactcenterinsightsV1AnnotationBoundary)
    ], GoogleCloudContactcenterinsightsV1CallAnnotation.prototype, "annotationStartBoundary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelTag" }),
        __metadata("design:type", Number)
    ], GoogleCloudContactcenterinsightsV1CallAnnotation.prototype, "channelTag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entityMentionData" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1entitymentiondata_1.GoogleCloudContactcenterinsightsV1EntityMentionData)
    ], GoogleCloudContactcenterinsightsV1CallAnnotation.prototype, "entityMentionData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=holdData" }),
        __metadata("design:type", Object)
    ], GoogleCloudContactcenterinsightsV1CallAnnotation.prototype, "holdData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=intentMatchData" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1intentmatchdata_1.GoogleCloudContactcenterinsightsV1IntentMatchData)
    ], GoogleCloudContactcenterinsightsV1CallAnnotation.prototype, "intentMatchData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interruptionData" }),
        __metadata("design:type", Object)
    ], GoogleCloudContactcenterinsightsV1CallAnnotation.prototype, "interruptionData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issueMatchData" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1issuematchdata_1.GoogleCloudContactcenterinsightsV1IssueMatchData)
    ], GoogleCloudContactcenterinsightsV1CallAnnotation.prototype, "issueMatchData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phraseMatchData" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1phrasematchdata_1.GoogleCloudContactcenterinsightsV1PhraseMatchData)
    ], GoogleCloudContactcenterinsightsV1CallAnnotation.prototype, "phraseMatchData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sentimentData" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1sentimentdata_1.GoogleCloudContactcenterinsightsV1SentimentData)
    ], GoogleCloudContactcenterinsightsV1CallAnnotation.prototype, "sentimentData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=silenceData" }),
        __metadata("design:type", Object)
    ], GoogleCloudContactcenterinsightsV1CallAnnotation.prototype, "silenceData", void 0);
    return GoogleCloudContactcenterinsightsV1CallAnnotation;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudContactcenterinsightsV1CallAnnotation = GoogleCloudContactcenterinsightsV1CallAnnotation;
