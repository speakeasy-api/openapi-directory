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
exports.GoogleCloudContactcenterinsightsV1AnnotatorSelector = void 0;
var utils_1 = require("../../../internal/utils");
// GoogleCloudContactcenterinsightsV1AnnotatorSelector
/**
 * Selector of all available annotators and phrase matchers to run.
**/
var GoogleCloudContactcenterinsightsV1AnnotatorSelector = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1AnnotatorSelector, _super);
    function GoogleCloudContactcenterinsightsV1AnnotatorSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issueModels" }),
        __metadata("design:type", Array)
    ], GoogleCloudContactcenterinsightsV1AnnotatorSelector.prototype, "issueModels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phraseMatchers" }),
        __metadata("design:type", Array)
    ], GoogleCloudContactcenterinsightsV1AnnotatorSelector.prototype, "phraseMatchers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runEntityAnnotator" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudContactcenterinsightsV1AnnotatorSelector.prototype, "runEntityAnnotator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runIntentAnnotator" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudContactcenterinsightsV1AnnotatorSelector.prototype, "runIntentAnnotator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runInterruptionAnnotator" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudContactcenterinsightsV1AnnotatorSelector.prototype, "runInterruptionAnnotator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runIssueModelAnnotator" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudContactcenterinsightsV1AnnotatorSelector.prototype, "runIssueModelAnnotator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runPhraseMatcherAnnotator" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudContactcenterinsightsV1AnnotatorSelector.prototype, "runPhraseMatcherAnnotator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runSentimentAnnotator" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudContactcenterinsightsV1AnnotatorSelector.prototype, "runSentimentAnnotator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runSilenceAnnotator" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudContactcenterinsightsV1AnnotatorSelector.prototype, "runSilenceAnnotator", void 0);
    return GoogleCloudContactcenterinsightsV1AnnotatorSelector;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudContactcenterinsightsV1AnnotatorSelector = GoogleCloudContactcenterinsightsV1AnnotatorSelector;
