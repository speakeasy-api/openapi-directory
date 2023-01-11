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
exports.GooglePrivacyDlpV2RiskAnalysisJobConfig = void 0;
var utils_1 = require("../../../internal/utils");
var googleprivacydlpv2action_1 = require("./googleprivacydlpv2action");
var googleprivacydlpv2privacymetric_1 = require("./googleprivacydlpv2privacymetric");
var googleprivacydlpv2bigquerytable_1 = require("./googleprivacydlpv2bigquerytable");
// GooglePrivacyDlpV2RiskAnalysisJobConfig
/**
 * Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
**/
var GooglePrivacyDlpV2RiskAnalysisJobConfig = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2RiskAnalysisJobConfig, _super);
    function GooglePrivacyDlpV2RiskAnalysisJobConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actions", elemType: googleprivacydlpv2action_1.GooglePrivacyDlpV2Action }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2RiskAnalysisJobConfig.prototype, "actions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privacyMetric" }),
        __metadata("design:type", googleprivacydlpv2privacymetric_1.GooglePrivacyDlpV2PrivacyMetric)
    ], GooglePrivacyDlpV2RiskAnalysisJobConfig.prototype, "privacyMetric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceTable" }),
        __metadata("design:type", googleprivacydlpv2bigquerytable_1.GooglePrivacyDlpV2BigQueryTable)
    ], GooglePrivacyDlpV2RiskAnalysisJobConfig.prototype, "sourceTable", void 0);
    return GooglePrivacyDlpV2RiskAnalysisJobConfig;
}(utils_1.SpeakeasyBase));
exports.GooglePrivacyDlpV2RiskAnalysisJobConfig = GooglePrivacyDlpV2RiskAnalysisJobConfig;
