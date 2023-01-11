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
exports.WaterfallChartSeries = void 0;
var utils_1 = require("../../../internal/utils");
var waterfallchartcustomsubtotal_1 = require("./waterfallchartcustomsubtotal");
var chartdata_1 = require("./chartdata");
var datalabel_1 = require("./datalabel");
var waterfallchartcolumnstyle_1 = require("./waterfallchartcolumnstyle");
// WaterfallChartSeries
/**
 * A single series of data for a waterfall chart.
**/
var WaterfallChartSeries = /** @class */ (function (_super) {
    __extends(WaterfallChartSeries, _super);
    function WaterfallChartSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customSubtotals", elemType: waterfallchartcustomsubtotal_1.WaterfallChartCustomSubtotal }),
        __metadata("design:type", Array)
    ], WaterfallChartSeries.prototype, "customSubtotals", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", chartdata_1.ChartData)
    ], WaterfallChartSeries.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataLabel" }),
        __metadata("design:type", datalabel_1.DataLabel)
    ], WaterfallChartSeries.prototype, "dataLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hideTrailingSubtotal" }),
        __metadata("design:type", Boolean)
    ], WaterfallChartSeries.prototype, "hideTrailingSubtotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=negativeColumnsStyle" }),
        __metadata("design:type", waterfallchartcolumnstyle_1.WaterfallChartColumnStyle)
    ], WaterfallChartSeries.prototype, "negativeColumnsStyle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=positiveColumnsStyle" }),
        __metadata("design:type", waterfallchartcolumnstyle_1.WaterfallChartColumnStyle)
    ], WaterfallChartSeries.prototype, "positiveColumnsStyle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subtotalColumnsStyle" }),
        __metadata("design:type", waterfallchartcolumnstyle_1.WaterfallChartColumnStyle)
    ], WaterfallChartSeries.prototype, "subtotalColumnsStyle", void 0);
    return WaterfallChartSeries;
}(utils_1.SpeakeasyBase));
exports.WaterfallChartSeries = WaterfallChartSeries;
