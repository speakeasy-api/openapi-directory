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
exports.WaterfallChartSpec = exports.WaterfallChartSpecStackedTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var linestyle_1 = require("./linestyle");
var waterfallchartdomain_1 = require("./waterfallchartdomain");
var waterfallchartseries_1 = require("./waterfallchartseries");
var datalabel_1 = require("./datalabel");
var WaterfallChartSpecStackedTypeEnum;
(function (WaterfallChartSpecStackedTypeEnum) {
    WaterfallChartSpecStackedTypeEnum["WaterfallStackedTypeUnspecified"] = "WATERFALL_STACKED_TYPE_UNSPECIFIED";
    WaterfallChartSpecStackedTypeEnum["Stacked"] = "STACKED";
    WaterfallChartSpecStackedTypeEnum["Sequential"] = "SEQUENTIAL";
})(WaterfallChartSpecStackedTypeEnum = exports.WaterfallChartSpecStackedTypeEnum || (exports.WaterfallChartSpecStackedTypeEnum = {}));
// WaterfallChartSpec
/**
 * A waterfall chart.
**/
var WaterfallChartSpec = /** @class */ (function (_super) {
    __extends(WaterfallChartSpec, _super);
    function WaterfallChartSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectorLineStyle" }),
        __metadata("design:type", linestyle_1.LineStyle)
    ], WaterfallChartSpec.prototype, "connectorLineStyle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", waterfallchartdomain_1.WaterfallChartDomain)
    ], WaterfallChartSpec.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firstValueIsTotal" }),
        __metadata("design:type", Boolean)
    ], WaterfallChartSpec.prototype, "firstValueIsTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hideConnectorLines" }),
        __metadata("design:type", Boolean)
    ], WaterfallChartSpec.prototype, "hideConnectorLines", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=series", elemType: waterfallchartseries_1.WaterfallChartSeries }),
        __metadata("design:type", Array)
    ], WaterfallChartSpec.prototype, "series", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stackedType" }),
        __metadata("design:type", String)
    ], WaterfallChartSpec.prototype, "stackedType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalDataLabel" }),
        __metadata("design:type", datalabel_1.DataLabel)
    ], WaterfallChartSpec.prototype, "totalDataLabel", void 0);
    return WaterfallChartSpec;
}(utils_1.SpeakeasyBase));
exports.WaterfallChartSpec = WaterfallChartSpec;
