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
exports.ReportDefinition = exports.ReportDefinitionReportDefinition = exports.ReportDefinitionReportDefinitionReportQuery = exports.ReportDefinitionReportDefinitionReportQueryVariable = exports.ReportDefinitionReportDefinitionReportQueryGroup = void 0;
var utils_1 = require("../../../internal/utils");
// ReportDefinitionReportDefinitionReportQueryGroup
/**
 * The querys' groups
**/
var ReportDefinitionReportDefinitionReportQueryGroup = /** @class */ (function (_super) {
    __extends(ReportDefinitionReportDefinitionReportQueryGroup, _super);
    function ReportDefinitionReportDefinitionReportQueryGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Group" }),
        __metadata("design:type", Array)
    ], ReportDefinitionReportDefinitionReportQueryGroup.prototype, "group", void 0);
    return ReportDefinitionReportDefinitionReportQueryGroup;
}(utils_1.SpeakeasyBase));
exports.ReportDefinitionReportDefinitionReportQueryGroup = ReportDefinitionReportDefinitionReportQueryGroup;
// ReportDefinitionReportDefinitionReportQueryVariable
/**
 * The querys' variables
**/
var ReportDefinitionReportDefinitionReportQueryVariable = /** @class */ (function (_super) {
    __extends(ReportDefinitionReportDefinitionReportQueryVariable, _super);
    function ReportDefinitionReportDefinitionReportQueryVariable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Variable" }),
        __metadata("design:type", Array)
    ], ReportDefinitionReportDefinitionReportQueryVariable.prototype, "variable", void 0);
    return ReportDefinitionReportDefinitionReportQueryVariable;
}(utils_1.SpeakeasyBase));
exports.ReportDefinitionReportDefinitionReportQueryVariable = ReportDefinitionReportDefinitionReportQueryVariable;
// ReportDefinitionReportDefinitionReportQuery
/**
 * The report definitions' report query
**/
var ReportDefinitionReportDefinitionReportQuery = /** @class */ (function (_super) {
    __extends(ReportDefinitionReportDefinitionReportQuery, _super);
    function ReportDefinitionReportDefinitionReportQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExcludeNullOrEmptyElements" }),
        __metadata("design:type", Boolean)
    ], ReportDefinitionReportDefinitionReportQuery.prototype, "excludeNullOrEmptyElements", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Groups" }),
        __metadata("design:type", ReportDefinitionReportDefinitionReportQueryGroup)
    ], ReportDefinitionReportDefinitionReportQuery.prototype, "groups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RootNodeName" }),
        __metadata("design:type", String)
    ], ReportDefinitionReportDefinitionReportQuery.prototype, "rootNodeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SuppressMetricAttributes" }),
        __metadata("design:type", Boolean)
    ], ReportDefinitionReportDefinitionReportQuery.prototype, "suppressMetricAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Variables" }),
        __metadata("design:type", ReportDefinitionReportDefinitionReportQueryVariable)
    ], ReportDefinitionReportDefinitionReportQuery.prototype, "variables", void 0);
    return ReportDefinitionReportDefinitionReportQuery;
}(utils_1.SpeakeasyBase));
exports.ReportDefinitionReportDefinitionReportQuery = ReportDefinitionReportDefinitionReportQuery;
var ReportDefinitionReportDefinition = /** @class */ (function (_super) {
    __extends(ReportDefinitionReportDefinition, _super);
    function ReportDefinitionReportDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Active" }),
        __metadata("design:type", Boolean)
    ], ReportDefinitionReportDefinition.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Readonly" }),
        __metadata("design:type", Boolean)
    ], ReportDefinitionReportDefinition.prototype, "readonly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ReportQuery" }),
        __metadata("design:type", ReportDefinitionReportDefinitionReportQuery)
    ], ReportDefinitionReportDefinition.prototype, "reportQuery", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SupportedTransforms" }),
        __metadata("design:type", String)
    ], ReportDefinitionReportDefinition.prototype, "supportedTransforms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], ReportDefinitionReportDefinition.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Version" }),
        __metadata("design:type", String)
    ], ReportDefinitionReportDefinition.prototype, "version", void 0);
    return ReportDefinitionReportDefinition;
}(utils_1.SpeakeasyBase));
exports.ReportDefinitionReportDefinition = ReportDefinitionReportDefinition;
var ReportDefinition = /** @class */ (function (_super) {
    __extends(ReportDefinition, _super);
    function ReportDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ReportDefinition" }),
        __metadata("design:type", ReportDefinitionReportDefinition)
    ], ReportDefinition.prototype, "reportDefinition", void 0);
    return ReportDefinition;
}(utils_1.SpeakeasyBase));
exports.ReportDefinition = ReportDefinition;
