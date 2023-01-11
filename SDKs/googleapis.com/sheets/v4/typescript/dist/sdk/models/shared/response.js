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
exports.Response = void 0;
var utils_1 = require("../../../internal/utils");
var addbandingresponse_1 = require("./addbandingresponse");
var addchartresponse_1 = require("./addchartresponse");
var adddatasourceresponse_1 = require("./adddatasourceresponse");
var adddimensiongroupresponse_1 = require("./adddimensiongroupresponse");
var addfilterviewresponse_1 = require("./addfilterviewresponse");
var addnamedrangeresponse_1 = require("./addnamedrangeresponse");
var addprotectedrangeresponse_1 = require("./addprotectedrangeresponse");
var addsheetresponse_1 = require("./addsheetresponse");
var addslicerresponse_1 = require("./addslicerresponse");
var createdevelopermetadataresponse_1 = require("./createdevelopermetadataresponse");
var deleteconditionalformatruleresponse_1 = require("./deleteconditionalformatruleresponse");
var deletedevelopermetadataresponse_1 = require("./deletedevelopermetadataresponse");
var deletedimensiongroupresponse_1 = require("./deletedimensiongroupresponse");
var deleteduplicatesresponse_1 = require("./deleteduplicatesresponse");
var duplicatefilterviewresponse_1 = require("./duplicatefilterviewresponse");
var duplicatesheetresponse_1 = require("./duplicatesheetresponse");
var findreplaceresponse_1 = require("./findreplaceresponse");
var refreshdatasourceresponse_1 = require("./refreshdatasourceresponse");
var trimwhitespaceresponse_1 = require("./trimwhitespaceresponse");
var updateconditionalformatruleresponse_1 = require("./updateconditionalformatruleresponse");
var updatedatasourceresponse_1 = require("./updatedatasourceresponse");
var updatedevelopermetadataresponse_1 = require("./updatedevelopermetadataresponse");
var updateembeddedobjectpositionresponse_1 = require("./updateembeddedobjectpositionresponse");
// Response
/**
 * A single response from an update.
**/
var Response = /** @class */ (function (_super) {
    __extends(Response, _super);
    function Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addBanding" }),
        __metadata("design:type", addbandingresponse_1.AddBandingResponse)
    ], Response.prototype, "addBanding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addChart" }),
        __metadata("design:type", addchartresponse_1.AddChartResponse)
    ], Response.prototype, "addChart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addDataSource" }),
        __metadata("design:type", adddatasourceresponse_1.AddDataSourceResponse)
    ], Response.prototype, "addDataSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addDimensionGroup" }),
        __metadata("design:type", adddimensiongroupresponse_1.AddDimensionGroupResponse)
    ], Response.prototype, "addDimensionGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addFilterView" }),
        __metadata("design:type", addfilterviewresponse_1.AddFilterViewResponse)
    ], Response.prototype, "addFilterView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addNamedRange" }),
        __metadata("design:type", addnamedrangeresponse_1.AddNamedRangeResponse)
    ], Response.prototype, "addNamedRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addProtectedRange" }),
        __metadata("design:type", addprotectedrangeresponse_1.AddProtectedRangeResponse)
    ], Response.prototype, "addProtectedRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addSheet" }),
        __metadata("design:type", addsheetresponse_1.AddSheetResponse)
    ], Response.prototype, "addSheet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addSlicer" }),
        __metadata("design:type", addslicerresponse_1.AddSlicerResponse)
    ], Response.prototype, "addSlicer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createDeveloperMetadata" }),
        __metadata("design:type", createdevelopermetadataresponse_1.CreateDeveloperMetadataResponse)
    ], Response.prototype, "createDeveloperMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteConditionalFormatRule" }),
        __metadata("design:type", deleteconditionalformatruleresponse_1.DeleteConditionalFormatRuleResponse)
    ], Response.prototype, "deleteConditionalFormatRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteDeveloperMetadata" }),
        __metadata("design:type", deletedevelopermetadataresponse_1.DeleteDeveloperMetadataResponse)
    ], Response.prototype, "deleteDeveloperMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteDimensionGroup" }),
        __metadata("design:type", deletedimensiongroupresponse_1.DeleteDimensionGroupResponse)
    ], Response.prototype, "deleteDimensionGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteDuplicates" }),
        __metadata("design:type", deleteduplicatesresponse_1.DeleteDuplicatesResponse)
    ], Response.prototype, "deleteDuplicates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duplicateFilterView" }),
        __metadata("design:type", duplicatefilterviewresponse_1.DuplicateFilterViewResponse)
    ], Response.prototype, "duplicateFilterView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duplicateSheet" }),
        __metadata("design:type", duplicatesheetresponse_1.DuplicateSheetResponse)
    ], Response.prototype, "duplicateSheet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=findReplace" }),
        __metadata("design:type", findreplaceresponse_1.FindReplaceResponse)
    ], Response.prototype, "findReplace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refreshDataSource" }),
        __metadata("design:type", refreshdatasourceresponse_1.RefreshDataSourceResponse)
    ], Response.prototype, "refreshDataSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trimWhitespace" }),
        __metadata("design:type", trimwhitespaceresponse_1.TrimWhitespaceResponse)
    ], Response.prototype, "trimWhitespace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateConditionalFormatRule" }),
        __metadata("design:type", updateconditionalformatruleresponse_1.UpdateConditionalFormatRuleResponse)
    ], Response.prototype, "updateConditionalFormatRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateDataSource" }),
        __metadata("design:type", updatedatasourceresponse_1.UpdateDataSourceResponse)
    ], Response.prototype, "updateDataSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateDeveloperMetadata" }),
        __metadata("design:type", updatedevelopermetadataresponse_1.UpdateDeveloperMetadataResponse)
    ], Response.prototype, "updateDeveloperMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateEmbeddedObjectPosition" }),
        __metadata("design:type", updateembeddedobjectpositionresponse_1.UpdateEmbeddedObjectPositionResponse)
    ], Response.prototype, "updateEmbeddedObjectPosition", void 0);
    return Response;
}(utils_1.SpeakeasyBase));
exports.Response = Response;
