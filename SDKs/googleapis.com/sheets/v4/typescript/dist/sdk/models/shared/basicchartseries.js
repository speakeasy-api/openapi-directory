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
exports.BasicChartSeries = exports.BasicChartSeriesTypeEnum = exports.BasicChartSeriesTargetAxisEnum = void 0;
var utils_1 = require("../../../internal/utils");
var color_1 = require("./color");
var colorstyle_1 = require("./colorstyle");
var datalabel_1 = require("./datalabel");
var linestyle_1 = require("./linestyle");
var pointstyle_1 = require("./pointstyle");
var chartdata_1 = require("./chartdata");
var basicseriesdatapointstyleoverride_1 = require("./basicseriesdatapointstyleoverride");
var BasicChartSeriesTargetAxisEnum;
(function (BasicChartSeriesTargetAxisEnum) {
    BasicChartSeriesTargetAxisEnum["BasicChartAxisPositionUnspecified"] = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED";
    BasicChartSeriesTargetAxisEnum["BottomAxis"] = "BOTTOM_AXIS";
    BasicChartSeriesTargetAxisEnum["LeftAxis"] = "LEFT_AXIS";
    BasicChartSeriesTargetAxisEnum["RightAxis"] = "RIGHT_AXIS";
})(BasicChartSeriesTargetAxisEnum = exports.BasicChartSeriesTargetAxisEnum || (exports.BasicChartSeriesTargetAxisEnum = {}));
var BasicChartSeriesTypeEnum;
(function (BasicChartSeriesTypeEnum) {
    BasicChartSeriesTypeEnum["BasicChartTypeUnspecified"] = "BASIC_CHART_TYPE_UNSPECIFIED";
    BasicChartSeriesTypeEnum["Bar"] = "BAR";
    BasicChartSeriesTypeEnum["Line"] = "LINE";
    BasicChartSeriesTypeEnum["Area"] = "AREA";
    BasicChartSeriesTypeEnum["Column"] = "COLUMN";
    BasicChartSeriesTypeEnum["Scatter"] = "SCATTER";
    BasicChartSeriesTypeEnum["Combo"] = "COMBO";
    BasicChartSeriesTypeEnum["SteppedArea"] = "STEPPED_AREA";
})(BasicChartSeriesTypeEnum = exports.BasicChartSeriesTypeEnum || (exports.BasicChartSeriesTypeEnum = {}));
// BasicChartSeries
/**
 * A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for the "Open Price", "High Price", "Low Price" and "Close Price".
**/
var BasicChartSeries = /** @class */ (function (_super) {
    __extends(BasicChartSeries, _super);
    function BasicChartSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", color_1.Color)
    ], BasicChartSeries.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=colorStyle" }),
        __metadata("design:type", colorstyle_1.ColorStyle)
    ], BasicChartSeries.prototype, "colorStyle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataLabel" }),
        __metadata("design:type", datalabel_1.DataLabel)
    ], BasicChartSeries.prototype, "dataLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lineStyle" }),
        __metadata("design:type", linestyle_1.LineStyle)
    ], BasicChartSeries.prototype, "lineStyle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pointStyle" }),
        __metadata("design:type", pointstyle_1.PointStyle)
    ], BasicChartSeries.prototype, "pointStyle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=series" }),
        __metadata("design:type", chartdata_1.ChartData)
    ], BasicChartSeries.prototype, "series", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=styleOverrides", elemType: basicseriesdatapointstyleoverride_1.BasicSeriesDataPointStyleOverride }),
        __metadata("design:type", Array)
    ], BasicChartSeries.prototype, "styleOverrides", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetAxis" }),
        __metadata("design:type", String)
    ], BasicChartSeries.prototype, "targetAxis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BasicChartSeries.prototype, "type", void 0);
    return BasicChartSeries;
}(utils_1.SpeakeasyBase));
exports.BasicChartSeries = BasicChartSeries;
