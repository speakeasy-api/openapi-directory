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
exports.GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails = void 0;
var utils_1 = require("../../../internal/utils");
var googleprivacydlpv2categoricalstatsresult_1 = require("./googleprivacydlpv2categoricalstatsresult");
var googleprivacydlpv2deltapresenceestimationresult_1 = require("./googleprivacydlpv2deltapresenceestimationresult");
var googleprivacydlpv2kanonymityresult_1 = require("./googleprivacydlpv2kanonymityresult");
var googleprivacydlpv2kmapestimationresult_1 = require("./googleprivacydlpv2kmapestimationresult");
var googleprivacydlpv2ldiversityresult_1 = require("./googleprivacydlpv2ldiversityresult");
var googleprivacydlpv2numericalstatsresult_1 = require("./googleprivacydlpv2numericalstatsresult");
var googleprivacydlpv2requestedriskanalysisoptions_1 = require("./googleprivacydlpv2requestedriskanalysisoptions");
var googleprivacydlpv2privacymetric_1 = require("./googleprivacydlpv2privacymetric");
var googleprivacydlpv2bigquerytable_1 = require("./googleprivacydlpv2bigquerytable");
// GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails
/**
 * Result of a risk analysis operation request.
**/
var GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails, _super);
    function GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categoricalStatsResult" }),
        __metadata("design:type", googleprivacydlpv2categoricalstatsresult_1.GooglePrivacyDlpV2CategoricalStatsResult)
    ], GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails.prototype, "categoricalStatsResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deltaPresenceEstimationResult" }),
        __metadata("design:type", googleprivacydlpv2deltapresenceestimationresult_1.GooglePrivacyDlpV2DeltaPresenceEstimationResult)
    ], GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails.prototype, "deltaPresenceEstimationResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kAnonymityResult" }),
        __metadata("design:type", googleprivacydlpv2kanonymityresult_1.GooglePrivacyDlpV2KAnonymityResult)
    ], GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails.prototype, "kAnonymityResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kMapEstimationResult" }),
        __metadata("design:type", googleprivacydlpv2kmapestimationresult_1.GooglePrivacyDlpV2KMapEstimationResult)
    ], GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails.prototype, "kMapEstimationResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lDiversityResult" }),
        __metadata("design:type", googleprivacydlpv2ldiversityresult_1.GooglePrivacyDlpV2LDiversityResult)
    ], GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails.prototype, "lDiversityResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numericalStatsResult" }),
        __metadata("design:type", googleprivacydlpv2numericalstatsresult_1.GooglePrivacyDlpV2NumericalStatsResult)
    ], GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails.prototype, "numericalStatsResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestedOptions" }),
        __metadata("design:type", googleprivacydlpv2requestedriskanalysisoptions_1.GooglePrivacyDlpV2RequestedRiskAnalysisOptions)
    ], GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails.prototype, "requestedOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestedPrivacyMetric" }),
        __metadata("design:type", googleprivacydlpv2privacymetric_1.GooglePrivacyDlpV2PrivacyMetric)
    ], GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails.prototype, "requestedPrivacyMetric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestedSourceTable" }),
        __metadata("design:type", googleprivacydlpv2bigquerytable_1.GooglePrivacyDlpV2BigQueryTable)
    ], GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails.prototype, "requestedSourceTable", void 0);
    return GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails;
}(utils_1.SpeakeasyBase));
exports.GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails = GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails;
