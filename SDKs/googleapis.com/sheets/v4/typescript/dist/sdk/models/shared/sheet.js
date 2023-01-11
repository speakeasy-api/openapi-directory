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
exports.Sheet = void 0;
var utils_1 = require("../../../internal/utils");
var bandedrange_1 = require("./bandedrange");
var basicfilter_1 = require("./basicfilter");
var embeddedchart_1 = require("./embeddedchart");
var dimensiongroup_1 = require("./dimensiongroup");
var conditionalformatrule_1 = require("./conditionalformatrule");
var griddata_1 = require("./griddata");
var developermetadata_1 = require("./developermetadata");
var filterview_1 = require("./filterview");
var gridrange_1 = require("./gridrange");
var sheetproperties_1 = require("./sheetproperties");
var protectedrange_1 = require("./protectedrange");
var slicer_1 = require("./slicer");
// Sheet
/**
 * A sheet in a spreadsheet.
**/
var Sheet = /** @class */ (function (_super) {
    __extends(Sheet, _super);
    function Sheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bandedRanges", elemType: bandedrange_1.BandedRange }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "bandedRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basicFilter" }),
        __metadata("design:type", basicfilter_1.BasicFilter)
    ], Sheet.prototype, "basicFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=charts", elemType: embeddedchart_1.EmbeddedChart }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "charts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=columnGroups", elemType: dimensiongroup_1.DimensionGroup }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "columnGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conditionalFormats", elemType: conditionalformatrule_1.ConditionalFormatRule }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "conditionalFormats", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: griddata_1.GridData }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=developerMetadata", elemType: developermetadata_1.DeveloperMetadata }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "developerMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filterViews", elemType: filterview_1.FilterView }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "filterViews", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merges", elemType: gridrange_1.GridRange }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "merges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties" }),
        __metadata("design:type", sheetproperties_1.SheetProperties)
    ], Sheet.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protectedRanges", elemType: protectedrange_1.ProtectedRange }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "protectedRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rowGroups", elemType: dimensiongroup_1.DimensionGroup }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "rowGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slicers", elemType: slicer_1.Slicer }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "slicers", void 0);
    return Sheet;
}(utils_1.SpeakeasyBase));
exports.Sheet = Sheet;
