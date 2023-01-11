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
exports.ScorecardChartSpec = exports.ScorecardChartSpecNumberFormatSourceEnum = exports.ScorecardChartSpecAggregateTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var chartdata_1 = require("./chartdata");
var baselinevalueformat_1 = require("./baselinevalueformat");
var chartcustomnumberformatoptions_1 = require("./chartcustomnumberformatoptions");
var keyvalueformat_1 = require("./keyvalueformat");
var ScorecardChartSpecAggregateTypeEnum;
(function (ScorecardChartSpecAggregateTypeEnum) {
    ScorecardChartSpecAggregateTypeEnum["ChartAggregateTypeUnspecified"] = "CHART_AGGREGATE_TYPE_UNSPECIFIED";
    ScorecardChartSpecAggregateTypeEnum["Average"] = "AVERAGE";
    ScorecardChartSpecAggregateTypeEnum["Count"] = "COUNT";
    ScorecardChartSpecAggregateTypeEnum["Max"] = "MAX";
    ScorecardChartSpecAggregateTypeEnum["Median"] = "MEDIAN";
    ScorecardChartSpecAggregateTypeEnum["Min"] = "MIN";
    ScorecardChartSpecAggregateTypeEnum["Sum"] = "SUM";
})(ScorecardChartSpecAggregateTypeEnum = exports.ScorecardChartSpecAggregateTypeEnum || (exports.ScorecardChartSpecAggregateTypeEnum = {}));
var ScorecardChartSpecNumberFormatSourceEnum;
(function (ScorecardChartSpecNumberFormatSourceEnum) {
    ScorecardChartSpecNumberFormatSourceEnum["ChartNumberFormatSourceUndefined"] = "CHART_NUMBER_FORMAT_SOURCE_UNDEFINED";
    ScorecardChartSpecNumberFormatSourceEnum["FromData"] = "FROM_DATA";
    ScorecardChartSpecNumberFormatSourceEnum["Custom"] = "CUSTOM";
})(ScorecardChartSpecNumberFormatSourceEnum = exports.ScorecardChartSpecNumberFormatSourceEnum || (exports.ScorecardChartSpecNumberFormatSourceEnum = {}));
// ScorecardChartSpec
/**
 * A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time.
**/
var ScorecardChartSpec = /** @class */ (function (_super) {
    __extends(ScorecardChartSpec, _super);
    function ScorecardChartSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aggregateType" }),
        __metadata("design:type", String)
    ], ScorecardChartSpec.prototype, "aggregateType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=baselineValueData" }),
        __metadata("design:type", chartdata_1.ChartData)
    ], ScorecardChartSpec.prototype, "baselineValueData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=baselineValueFormat" }),
        __metadata("design:type", baselinevalueformat_1.BaselineValueFormat)
    ], ScorecardChartSpec.prototype, "baselineValueFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFormatOptions" }),
        __metadata("design:type", chartcustomnumberformatoptions_1.ChartCustomNumberFormatOptions)
    ], ScorecardChartSpec.prototype, "customFormatOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keyValueData" }),
        __metadata("design:type", chartdata_1.ChartData)
    ], ScorecardChartSpec.prototype, "keyValueData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keyValueFormat" }),
        __metadata("design:type", keyvalueformat_1.KeyValueFormat)
    ], ScorecardChartSpec.prototype, "keyValueFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberFormatSource" }),
        __metadata("design:type", String)
    ], ScorecardChartSpec.prototype, "numberFormatSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scaleFactor" }),
        __metadata("design:type", Number)
    ], ScorecardChartSpec.prototype, "scaleFactor", void 0);
    return ScorecardChartSpec;
}(utils_1.SpeakeasyBase));
exports.ScorecardChartSpec = ScorecardChartSpec;
