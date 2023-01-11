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
exports.PivotTable = exports.PivotTableValueLayoutEnum = void 0;
var utils_1 = require("../../../internal/utils");
var pivotgroup_1 = require("./pivotgroup");
var pivotfiltercriteria_1 = require("./pivotfiltercriteria");
var dataexecutionstatus_1 = require("./dataexecutionstatus");
var pivotfilterspec_1 = require("./pivotfilterspec");
var gridrange_1 = require("./gridrange");
var pivotvalue_1 = require("./pivotvalue");
var PivotTableValueLayoutEnum;
(function (PivotTableValueLayoutEnum) {
    PivotTableValueLayoutEnum["Horizontal"] = "HORIZONTAL";
    PivotTableValueLayoutEnum["Vertical"] = "VERTICAL";
})(PivotTableValueLayoutEnum = exports.PivotTableValueLayoutEnum || (exports.PivotTableValueLayoutEnum = {}));
// PivotTable
/**
 * A pivot table.
**/
var PivotTable = /** @class */ (function (_super) {
    __extends(PivotTable, _super);
    function PivotTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=columns", elemType: pivotgroup_1.PivotGroup }),
        __metadata("design:type", Array)
    ], PivotTable.prototype, "columns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=criteria", elemType: pivotfiltercriteria_1.PivotFilterCriteria }),
        __metadata("design:type", Object)
    ], PivotTable.prototype, "criteria", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataExecutionStatus" }),
        __metadata("design:type", dataexecutionstatus_1.DataExecutionStatus)
    ], PivotTable.prototype, "dataExecutionStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataSourceId" }),
        __metadata("design:type", String)
    ], PivotTable.prototype, "dataSourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filterSpecs", elemType: pivotfilterspec_1.PivotFilterSpec }),
        __metadata("design:type", Array)
    ], PivotTable.prototype, "filterSpecs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rows", elemType: pivotgroup_1.PivotGroup }),
        __metadata("design:type", Array)
    ], PivotTable.prototype, "rows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", gridrange_1.GridRange)
    ], PivotTable.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valueLayout" }),
        __metadata("design:type", String)
    ], PivotTable.prototype, "valueLayout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=values", elemType: pivotvalue_1.PivotValue }),
        __metadata("design:type", Array)
    ], PivotTable.prototype, "values", void 0);
    return PivotTable;
}(utils_1.SpeakeasyBase));
exports.PivotTable = PivotTable;
