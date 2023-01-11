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
exports.ChartData = exports.ChartDataAggregateTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var datasourcecolumnreference_1 = require("./datasourcecolumnreference");
var chartgrouprule_1 = require("./chartgrouprule");
var chartsourcerange_1 = require("./chartsourcerange");
var ChartDataAggregateTypeEnum;
(function (ChartDataAggregateTypeEnum) {
    ChartDataAggregateTypeEnum["ChartAggregateTypeUnspecified"] = "CHART_AGGREGATE_TYPE_UNSPECIFIED";
    ChartDataAggregateTypeEnum["Average"] = "AVERAGE";
    ChartDataAggregateTypeEnum["Count"] = "COUNT";
    ChartDataAggregateTypeEnum["Max"] = "MAX";
    ChartDataAggregateTypeEnum["Median"] = "MEDIAN";
    ChartDataAggregateTypeEnum["Min"] = "MIN";
    ChartDataAggregateTypeEnum["Sum"] = "SUM";
})(ChartDataAggregateTypeEnum = exports.ChartDataAggregateTypeEnum || (exports.ChartDataAggregateTypeEnum = {}));
// ChartData
/**
 * The data included in a domain or series.
**/
var ChartData = /** @class */ (function (_super) {
    __extends(ChartData, _super);
    function ChartData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aggregateType" }),
        __metadata("design:type", String)
    ], ChartData.prototype, "aggregateType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=columnReference" }),
        __metadata("design:type", datasourcecolumnreference_1.DataSourceColumnReference)
    ], ChartData.prototype, "columnReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groupRule" }),
        __metadata("design:type", chartgrouprule_1.ChartGroupRule)
    ], ChartData.prototype, "groupRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceRange" }),
        __metadata("design:type", chartsourcerange_1.ChartSourceRange)
    ], ChartData.prototype, "sourceRange", void 0);
    return ChartData;
}(utils_1.SpeakeasyBase));
exports.ChartData = ChartData;
