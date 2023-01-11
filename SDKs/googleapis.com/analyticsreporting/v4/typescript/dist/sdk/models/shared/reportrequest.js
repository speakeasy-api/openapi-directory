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
exports.ReportRequest = exports.ReportRequestSamplingLevelEnum = void 0;
var utils_1 = require("../../../internal/utils");
var cohortgroup_1 = require("./cohortgroup");
var daterange_1 = require("./daterange");
var dimensionfilterclause_1 = require("./dimensionfilterclause");
var dimension_1 = require("./dimension");
var metricfilterclause_1 = require("./metricfilterclause");
var metric_1 = require("./metric");
var orderby_1 = require("./orderby");
var pivot_1 = require("./pivot");
var segment_1 = require("./segment");
var ReportRequestSamplingLevelEnum;
(function (ReportRequestSamplingLevelEnum) {
    ReportRequestSamplingLevelEnum["SamplingUnspecified"] = "SAMPLING_UNSPECIFIED";
    ReportRequestSamplingLevelEnum["Default"] = "DEFAULT";
    ReportRequestSamplingLevelEnum["Small"] = "SMALL";
    ReportRequestSamplingLevelEnum["Large"] = "LARGE";
})(ReportRequestSamplingLevelEnum = exports.ReportRequestSamplingLevelEnum || (exports.ReportRequestSamplingLevelEnum = {}));
// ReportRequest
/**
 * The main request class which specifies the Reporting API request.
**/
var ReportRequest = /** @class */ (function (_super) {
    __extends(ReportRequest, _super);
    function ReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cohortGroup" }),
        __metadata("design:type", cohortgroup_1.CohortGroup)
    ], ReportRequest.prototype, "cohortGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateRanges", elemType: daterange_1.DateRange }),
        __metadata("design:type", Array)
    ], ReportRequest.prototype, "dateRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dimensionFilterClauses", elemType: dimensionfilterclause_1.DimensionFilterClause }),
        __metadata("design:type", Array)
    ], ReportRequest.prototype, "dimensionFilterClauses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dimensions", elemType: dimension_1.Dimension }),
        __metadata("design:type", Array)
    ], ReportRequest.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filtersExpression" }),
        __metadata("design:type", String)
    ], ReportRequest.prototype, "filtersExpression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hideTotals" }),
        __metadata("design:type", Boolean)
    ], ReportRequest.prototype, "hideTotals", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hideValueRanges" }),
        __metadata("design:type", Boolean)
    ], ReportRequest.prototype, "hideValueRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includeEmptyRows" }),
        __metadata("design:type", Boolean)
    ], ReportRequest.prototype, "includeEmptyRows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metricFilterClauses", elemType: metricfilterclause_1.MetricFilterClause }),
        __metadata("design:type", Array)
    ], ReportRequest.prototype, "metricFilterClauses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metrics", elemType: metric_1.Metric }),
        __metadata("design:type", Array)
    ], ReportRequest.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderBys", elemType: orderby_1.OrderBy }),
        __metadata("design:type", Array)
    ], ReportRequest.prototype, "orderBys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], ReportRequest.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pageToken" }),
        __metadata("design:type", String)
    ], ReportRequest.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pivots", elemType: pivot_1.Pivot }),
        __metadata("design:type", Array)
    ], ReportRequest.prototype, "pivots", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=samplingLevel" }),
        __metadata("design:type", String)
    ], ReportRequest.prototype, "samplingLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=segments", elemType: segment_1.Segment }),
        __metadata("design:type", Array)
    ], ReportRequest.prototype, "segments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=viewId" }),
        __metadata("design:type", String)
    ], ReportRequest.prototype, "viewId", void 0);
    return ReportRequest;
}(utils_1.SpeakeasyBase));
exports.ReportRequest = ReportRequest;
