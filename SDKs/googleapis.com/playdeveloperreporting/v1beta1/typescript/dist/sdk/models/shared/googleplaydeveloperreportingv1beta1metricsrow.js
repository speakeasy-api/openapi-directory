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
exports.GooglePlayDeveloperReportingV1beta1MetricsRow = exports.GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googleplaydeveloperreportingv1beta1dimensionvalue_1 = require("./googleplaydeveloperreportingv1beta1dimensionvalue");
var googleplaydeveloperreportingv1beta1metricvalue_1 = require("./googleplaydeveloperreportingv1beta1metricvalue");
var googletypedatetime_1 = require("./googletypedatetime");
var GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum;
(function (GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum) {
    GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum["AggregationPeriodUnspecified"] = "AGGREGATION_PERIOD_UNSPECIFIED";
    GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum["Hourly"] = "HOURLY";
    GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum["Daily"] = "DAILY";
})(GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum = exports.GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum || (exports.GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum = {}));
// GooglePlayDeveloperReportingV1beta1MetricsRow
/**
 * Represents a row of dimensions and metrics.
**/
var GooglePlayDeveloperReportingV1beta1MetricsRow = /** @class */ (function (_super) {
    __extends(GooglePlayDeveloperReportingV1beta1MetricsRow, _super);
    function GooglePlayDeveloperReportingV1beta1MetricsRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aggregationPeriod" }),
        __metadata("design:type", String)
    ], GooglePlayDeveloperReportingV1beta1MetricsRow.prototype, "aggregationPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dimensions", elemType: googleplaydeveloperreportingv1beta1dimensionvalue_1.GooglePlayDeveloperReportingV1beta1DimensionValue }),
        __metadata("design:type", Array)
    ], GooglePlayDeveloperReportingV1beta1MetricsRow.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metrics", elemType: googleplaydeveloperreportingv1beta1metricvalue_1.GooglePlayDeveloperReportingV1beta1MetricValue }),
        __metadata("design:type", Array)
    ], GooglePlayDeveloperReportingV1beta1MetricsRow.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startTime" }),
        __metadata("design:type", googletypedatetime_1.GoogleTypeDateTime)
    ], GooglePlayDeveloperReportingV1beta1MetricsRow.prototype, "startTime", void 0);
    return GooglePlayDeveloperReportingV1beta1MetricsRow;
}(utils_1.SpeakeasyBase));
exports.GooglePlayDeveloperReportingV1beta1MetricsRow = GooglePlayDeveloperReportingV1beta1MetricsRow;
