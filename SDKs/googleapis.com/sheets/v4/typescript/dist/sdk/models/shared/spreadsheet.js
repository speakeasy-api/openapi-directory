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
exports.Spreadsheet = exports.SpreadsheetInput = void 0;
var utils_1 = require("../../../internal/utils");
var datasource_1 = require("./datasource");
var developermetadata_1 = require("./developermetadata");
var namedrange_1 = require("./namedrange");
var spreadsheetproperties_1 = require("./spreadsheetproperties");
var sheet_1 = require("./sheet");
var datasourcerefreshschedule_1 = require("./datasourcerefreshschedule");
// SpreadsheetInput
/**
 * Resource that represents a spreadsheet.
**/
var SpreadsheetInput = /** @class */ (function (_super) {
    __extends(SpreadsheetInput, _super);
    function SpreadsheetInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataSources", elemType: datasource_1.DataSource }),
        __metadata("design:type", Array)
    ], SpreadsheetInput.prototype, "dataSources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=developerMetadata", elemType: developermetadata_1.DeveloperMetadata }),
        __metadata("design:type", Array)
    ], SpreadsheetInput.prototype, "developerMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=namedRanges", elemType: namedrange_1.NamedRange }),
        __metadata("design:type", Array)
    ], SpreadsheetInput.prototype, "namedRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties" }),
        __metadata("design:type", spreadsheetproperties_1.SpreadsheetProperties)
    ], SpreadsheetInput.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sheets", elemType: sheet_1.Sheet }),
        __metadata("design:type", Array)
    ], SpreadsheetInput.prototype, "sheets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spreadsheetId" }),
        __metadata("design:type", String)
    ], SpreadsheetInput.prototype, "spreadsheetId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spreadsheetUrl" }),
        __metadata("design:type", String)
    ], SpreadsheetInput.prototype, "spreadsheetUrl", void 0);
    return SpreadsheetInput;
}(utils_1.SpeakeasyBase));
exports.SpreadsheetInput = SpreadsheetInput;
// Spreadsheet
/**
 * Resource that represents a spreadsheet.
**/
var Spreadsheet = /** @class */ (function (_super) {
    __extends(Spreadsheet, _super);
    function Spreadsheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataSourceSchedules", elemType: datasourcerefreshschedule_1.DataSourceRefreshSchedule }),
        __metadata("design:type", Array)
    ], Spreadsheet.prototype, "dataSourceSchedules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataSources", elemType: datasource_1.DataSource }),
        __metadata("design:type", Array)
    ], Spreadsheet.prototype, "dataSources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=developerMetadata", elemType: developermetadata_1.DeveloperMetadata }),
        __metadata("design:type", Array)
    ], Spreadsheet.prototype, "developerMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=namedRanges", elemType: namedrange_1.NamedRange }),
        __metadata("design:type", Array)
    ], Spreadsheet.prototype, "namedRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties" }),
        __metadata("design:type", spreadsheetproperties_1.SpreadsheetProperties)
    ], Spreadsheet.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sheets", elemType: sheet_1.Sheet }),
        __metadata("design:type", Array)
    ], Spreadsheet.prototype, "sheets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spreadsheetId" }),
        __metadata("design:type", String)
    ], Spreadsheet.prototype, "spreadsheetId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spreadsheetUrl" }),
        __metadata("design:type", String)
    ], Spreadsheet.prototype, "spreadsheetUrl", void 0);
    return Spreadsheet;
}(utils_1.SpeakeasyBase));
exports.Spreadsheet = Spreadsheet;
