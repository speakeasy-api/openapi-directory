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
exports.ChartSpec = exports.ChartSpecHiddenDimensionStrategyEnum = void 0;
var utils_1 = require("../../../internal/utils");
var color_1 = require("./color");
var colorstyle_1 = require("./colorstyle");
var basicchartspec_1 = require("./basicchartspec");
var bubblechartspec_1 = require("./bubblechartspec");
var candlestickchartspec_1 = require("./candlestickchartspec");
var datasourcechartproperties_1 = require("./datasourcechartproperties");
var filterspec_1 = require("./filterspec");
var histogramchartspec_1 = require("./histogramchartspec");
var orgchartspec_1 = require("./orgchartspec");
var piechartspec_1 = require("./piechartspec");
var scorecardchartspec_1 = require("./scorecardchartspec");
var sortspec_1 = require("./sortspec");
var textformat_1 = require("./textformat");
var textposition_1 = require("./textposition");
var treemapchartspec_1 = require("./treemapchartspec");
var waterfallchartspec_1 = require("./waterfallchartspec");
var ChartSpecHiddenDimensionStrategyEnum;
(function (ChartSpecHiddenDimensionStrategyEnum) {
    ChartSpecHiddenDimensionStrategyEnum["ChartHiddenDimensionStrategyUnspecified"] = "CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED";
    ChartSpecHiddenDimensionStrategyEnum["SkipHiddenRowsAndColumns"] = "SKIP_HIDDEN_ROWS_AND_COLUMNS";
    ChartSpecHiddenDimensionStrategyEnum["SkipHiddenRows"] = "SKIP_HIDDEN_ROWS";
    ChartSpecHiddenDimensionStrategyEnum["SkipHiddenColumns"] = "SKIP_HIDDEN_COLUMNS";
    ChartSpecHiddenDimensionStrategyEnum["ShowAll"] = "SHOW_ALL";
})(ChartSpecHiddenDimensionStrategyEnum = exports.ChartSpecHiddenDimensionStrategyEnum || (exports.ChartSpecHiddenDimensionStrategyEnum = {}));
// ChartSpec
/**
 * The specifications of a chart.
**/
var ChartSpec = /** @class */ (function (_super) {
    __extends(ChartSpec, _super);
    function ChartSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=altText" }),
        __metadata("design:type", String)
    ], ChartSpec.prototype, "altText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backgroundColor" }),
        __metadata("design:type", color_1.Color)
    ], ChartSpec.prototype, "backgroundColor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backgroundColorStyle" }),
        __metadata("design:type", colorstyle_1.ColorStyle)
    ], ChartSpec.prototype, "backgroundColorStyle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basicChart" }),
        __metadata("design:type", basicchartspec_1.BasicChartSpec)
    ], ChartSpec.prototype, "basicChart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bubbleChart" }),
        __metadata("design:type", bubblechartspec_1.BubbleChartSpec)
    ], ChartSpec.prototype, "bubbleChart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=candlestickChart" }),
        __metadata("design:type", candlestickchartspec_1.CandlestickChartSpec)
    ], ChartSpec.prototype, "candlestickChart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataSourceChartProperties" }),
        __metadata("design:type", datasourcechartproperties_1.DataSourceChartProperties)
    ], ChartSpec.prototype, "dataSourceChartProperties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filterSpecs", elemType: filterspec_1.FilterSpec }),
        __metadata("design:type", Array)
    ], ChartSpec.prototype, "filterSpecs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fontName" }),
        __metadata("design:type", String)
    ], ChartSpec.prototype, "fontName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hiddenDimensionStrategy" }),
        __metadata("design:type", String)
    ], ChartSpec.prototype, "hiddenDimensionStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=histogramChart" }),
        __metadata("design:type", histogramchartspec_1.HistogramChartSpec)
    ], ChartSpec.prototype, "histogramChart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximized" }),
        __metadata("design:type", Boolean)
    ], ChartSpec.prototype, "maximized", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orgChart" }),
        __metadata("design:type", orgchartspec_1.OrgChartSpec)
    ], ChartSpec.prototype, "orgChart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pieChart" }),
        __metadata("design:type", piechartspec_1.PieChartSpec)
    ], ChartSpec.prototype, "pieChart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scorecardChart" }),
        __metadata("design:type", scorecardchartspec_1.ScorecardChartSpec)
    ], ChartSpec.prototype, "scorecardChart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sortSpecs", elemType: sortspec_1.SortSpec }),
        __metadata("design:type", Array)
    ], ChartSpec.prototype, "sortSpecs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subtitle" }),
        __metadata("design:type", String)
    ], ChartSpec.prototype, "subtitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subtitleTextFormat" }),
        __metadata("design:type", textformat_1.TextFormat)
    ], ChartSpec.prototype, "subtitleTextFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subtitleTextPosition" }),
        __metadata("design:type", textposition_1.TextPosition)
    ], ChartSpec.prototype, "subtitleTextPosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ChartSpec.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=titleTextFormat" }),
        __metadata("design:type", textformat_1.TextFormat)
    ], ChartSpec.prototype, "titleTextFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=titleTextPosition" }),
        __metadata("design:type", textposition_1.TextPosition)
    ], ChartSpec.prototype, "titleTextPosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=treemapChart" }),
        __metadata("design:type", treemapchartspec_1.TreemapChartSpec)
    ], ChartSpec.prototype, "treemapChart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waterfallChart" }),
        __metadata("design:type", waterfallchartspec_1.WaterfallChartSpec)
    ], ChartSpec.prototype, "waterfallChart", void 0);
    return ChartSpec;
}(utils_1.SpeakeasyBase));
exports.ChartSpec = ChartSpec;
