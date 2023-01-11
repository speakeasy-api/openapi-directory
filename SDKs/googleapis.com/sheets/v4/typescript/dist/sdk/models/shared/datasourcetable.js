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
exports.DataSourceTable = exports.DataSourceTableColumnSelectionTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var datasourcecolumnreference_1 = require("./datasourcecolumnreference");
var dataexecutionstatus_1 = require("./dataexecutionstatus");
var filterspec_1 = require("./filterspec");
var sortspec_1 = require("./sortspec");
var DataSourceTableColumnSelectionTypeEnum;
(function (DataSourceTableColumnSelectionTypeEnum) {
    DataSourceTableColumnSelectionTypeEnum["DataSourceTableColumnSelectionTypeUnspecified"] = "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED";
    DataSourceTableColumnSelectionTypeEnum["Selected"] = "SELECTED";
    DataSourceTableColumnSelectionTypeEnum["SyncAll"] = "SYNC_ALL";
})(DataSourceTableColumnSelectionTypeEnum = exports.DataSourceTableColumnSelectionTypeEnum || (exports.DataSourceTableColumnSelectionTypeEnum = {}));
// DataSourceTable
/**
 * A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor.
**/
var DataSourceTable = /** @class */ (function (_super) {
    __extends(DataSourceTable, _super);
    function DataSourceTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=columnSelectionType" }),
        __metadata("design:type", String)
    ], DataSourceTable.prototype, "columnSelectionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=columns", elemType: datasourcecolumnreference_1.DataSourceColumnReference }),
        __metadata("design:type", Array)
    ], DataSourceTable.prototype, "columns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataExecutionStatus" }),
        __metadata("design:type", dataexecutionstatus_1.DataExecutionStatus)
    ], DataSourceTable.prototype, "dataExecutionStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataSourceId" }),
        __metadata("design:type", String)
    ], DataSourceTable.prototype, "dataSourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filterSpecs", elemType: filterspec_1.FilterSpec }),
        __metadata("design:type", Array)
    ], DataSourceTable.prototype, "filterSpecs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rowLimit" }),
        __metadata("design:type", Number)
    ], DataSourceTable.prototype, "rowLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sortSpecs", elemType: sortspec_1.SortSpec }),
        __metadata("design:type", Array)
    ], DataSourceTable.prototype, "sortSpecs", void 0);
    return DataSourceTable;
}(utils_1.SpeakeasyBase));
exports.DataSourceTable = DataSourceTable;
