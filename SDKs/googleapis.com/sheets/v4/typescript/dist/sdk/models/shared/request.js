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
exports.Request = void 0;
var utils_1 = require("../../../internal/utils");
var addbandingrequest_1 = require("./addbandingrequest");
var addchartrequest_1 = require("./addchartrequest");
var addconditionalformatrulerequest_1 = require("./addconditionalformatrulerequest");
var adddatasourcerequest_1 = require("./adddatasourcerequest");
var adddimensiongrouprequest_1 = require("./adddimensiongrouprequest");
var addfilterviewrequest_1 = require("./addfilterviewrequest");
var addnamedrangerequest_1 = require("./addnamedrangerequest");
var addprotectedrangerequest_1 = require("./addprotectedrangerequest");
var addsheetrequest_1 = require("./addsheetrequest");
var addslicerrequest_1 = require("./addslicerrequest");
var appendcellsrequest_1 = require("./appendcellsrequest");
var appenddimensionrequest_1 = require("./appenddimensionrequest");
var autofillrequest_1 = require("./autofillrequest");
var autoresizedimensionsrequest_1 = require("./autoresizedimensionsrequest");
var clearbasicfilterrequest_1 = require("./clearbasicfilterrequest");
var copypasterequest_1 = require("./copypasterequest");
var createdevelopermetadatarequest_1 = require("./createdevelopermetadatarequest");
var cutpasterequest_1 = require("./cutpasterequest");
var deletebandingrequest_1 = require("./deletebandingrequest");
var deleteconditionalformatrulerequest_1 = require("./deleteconditionalformatrulerequest");
var deletedatasourcerequest_1 = require("./deletedatasourcerequest");
var deletedevelopermetadatarequest_1 = require("./deletedevelopermetadatarequest");
var deletedimensionrequest_1 = require("./deletedimensionrequest");
var deletedimensiongrouprequest_1 = require("./deletedimensiongrouprequest");
var deleteduplicatesrequest_1 = require("./deleteduplicatesrequest");
var deleteembeddedobjectrequest_1 = require("./deleteembeddedobjectrequest");
var deletefilterviewrequest_1 = require("./deletefilterviewrequest");
var deletenamedrangerequest_1 = require("./deletenamedrangerequest");
var deleteprotectedrangerequest_1 = require("./deleteprotectedrangerequest");
var deleterangerequest_1 = require("./deleterangerequest");
var deletesheetrequest_1 = require("./deletesheetrequest");
var duplicatefilterviewrequest_1 = require("./duplicatefilterviewrequest");
var duplicatesheetrequest_1 = require("./duplicatesheetrequest");
var findreplacerequest_1 = require("./findreplacerequest");
var insertdimensionrequest_1 = require("./insertdimensionrequest");
var insertrangerequest_1 = require("./insertrangerequest");
var mergecellsrequest_1 = require("./mergecellsrequest");
var movedimensionrequest_1 = require("./movedimensionrequest");
var pastedatarequest_1 = require("./pastedatarequest");
var randomizerangerequest_1 = require("./randomizerangerequest");
var refreshdatasourcerequest_1 = require("./refreshdatasourcerequest");
var repeatcellrequest_1 = require("./repeatcellrequest");
var setbasicfilterrequest_1 = require("./setbasicfilterrequest");
var setdatavalidationrequest_1 = require("./setdatavalidationrequest");
var sortrangerequest_1 = require("./sortrangerequest");
var texttocolumnsrequest_1 = require("./texttocolumnsrequest");
var trimwhitespacerequest_1 = require("./trimwhitespacerequest");
var unmergecellsrequest_1 = require("./unmergecellsrequest");
var updatebandingrequest_1 = require("./updatebandingrequest");
var updatebordersrequest_1 = require("./updatebordersrequest");
var updatecellsrequest_1 = require("./updatecellsrequest");
var updatechartspecrequest_1 = require("./updatechartspecrequest");
var updateconditionalformatrulerequest_1 = require("./updateconditionalformatrulerequest");
var updatedatasourcerequest_1 = require("./updatedatasourcerequest");
var updatedevelopermetadatarequest_1 = require("./updatedevelopermetadatarequest");
var updatedimensiongrouprequest_1 = require("./updatedimensiongrouprequest");
var updatedimensionpropertiesrequest_1 = require("./updatedimensionpropertiesrequest");
var updateembeddedobjectborderrequest_1 = require("./updateembeddedobjectborderrequest");
var updateembeddedobjectpositionrequest_1 = require("./updateembeddedobjectpositionrequest");
var updatefilterviewrequest_1 = require("./updatefilterviewrequest");
var updatenamedrangerequest_1 = require("./updatenamedrangerequest");
var updateprotectedrangerequest_1 = require("./updateprotectedrangerequest");
var updatesheetpropertiesrequest_1 = require("./updatesheetpropertiesrequest");
var updateslicerspecrequest_1 = require("./updateslicerspecrequest");
var updatespreadsheetpropertiesrequest_1 = require("./updatespreadsheetpropertiesrequest");
// Request
/**
 * A single kind of update to apply to a spreadsheet.
**/
var Request = /** @class */ (function (_super) {
    __extends(Request, _super);
    function Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addBanding" }),
        __metadata("design:type", addbandingrequest_1.AddBandingRequest)
    ], Request.prototype, "addBanding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addChart" }),
        __metadata("design:type", addchartrequest_1.AddChartRequest)
    ], Request.prototype, "addChart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addConditionalFormatRule" }),
        __metadata("design:type", addconditionalformatrulerequest_1.AddConditionalFormatRuleRequest)
    ], Request.prototype, "addConditionalFormatRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addDataSource" }),
        __metadata("design:type", adddatasourcerequest_1.AddDataSourceRequest)
    ], Request.prototype, "addDataSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addDimensionGroup" }),
        __metadata("design:type", adddimensiongrouprequest_1.AddDimensionGroupRequest)
    ], Request.prototype, "addDimensionGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addFilterView" }),
        __metadata("design:type", addfilterviewrequest_1.AddFilterViewRequest)
    ], Request.prototype, "addFilterView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addNamedRange" }),
        __metadata("design:type", addnamedrangerequest_1.AddNamedRangeRequest)
    ], Request.prototype, "addNamedRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addProtectedRange" }),
        __metadata("design:type", addprotectedrangerequest_1.AddProtectedRangeRequest)
    ], Request.prototype, "addProtectedRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addSheet" }),
        __metadata("design:type", addsheetrequest_1.AddSheetRequest)
    ], Request.prototype, "addSheet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addSlicer" }),
        __metadata("design:type", addslicerrequest_1.AddSlicerRequest)
    ], Request.prototype, "addSlicer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appendCells" }),
        __metadata("design:type", appendcellsrequest_1.AppendCellsRequest)
    ], Request.prototype, "appendCells", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appendDimension" }),
        __metadata("design:type", appenddimensionrequest_1.AppendDimensionRequest)
    ], Request.prototype, "appendDimension", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoFill" }),
        __metadata("design:type", autofillrequest_1.AutoFillRequest)
    ], Request.prototype, "autoFill", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoResizeDimensions" }),
        __metadata("design:type", autoresizedimensionsrequest_1.AutoResizeDimensionsRequest)
    ], Request.prototype, "autoResizeDimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clearBasicFilter" }),
        __metadata("design:type", clearbasicfilterrequest_1.ClearBasicFilterRequest)
    ], Request.prototype, "clearBasicFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyPaste" }),
        __metadata("design:type", copypasterequest_1.CopyPasteRequest)
    ], Request.prototype, "copyPaste", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createDeveloperMetadata" }),
        __metadata("design:type", createdevelopermetadatarequest_1.CreateDeveloperMetadataRequest)
    ], Request.prototype, "createDeveloperMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cutPaste" }),
        __metadata("design:type", cutpasterequest_1.CutPasteRequest)
    ], Request.prototype, "cutPaste", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteBanding" }),
        __metadata("design:type", deletebandingrequest_1.DeleteBandingRequest)
    ], Request.prototype, "deleteBanding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteConditionalFormatRule" }),
        __metadata("design:type", deleteconditionalformatrulerequest_1.DeleteConditionalFormatRuleRequest)
    ], Request.prototype, "deleteConditionalFormatRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteDataSource" }),
        __metadata("design:type", deletedatasourcerequest_1.DeleteDataSourceRequest)
    ], Request.prototype, "deleteDataSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteDeveloperMetadata" }),
        __metadata("design:type", deletedevelopermetadatarequest_1.DeleteDeveloperMetadataRequest)
    ], Request.prototype, "deleteDeveloperMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteDimension" }),
        __metadata("design:type", deletedimensionrequest_1.DeleteDimensionRequest)
    ], Request.prototype, "deleteDimension", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteDimensionGroup" }),
        __metadata("design:type", deletedimensiongrouprequest_1.DeleteDimensionGroupRequest)
    ], Request.prototype, "deleteDimensionGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteDuplicates" }),
        __metadata("design:type", deleteduplicatesrequest_1.DeleteDuplicatesRequest)
    ], Request.prototype, "deleteDuplicates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteEmbeddedObject" }),
        __metadata("design:type", deleteembeddedobjectrequest_1.DeleteEmbeddedObjectRequest)
    ], Request.prototype, "deleteEmbeddedObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteFilterView" }),
        __metadata("design:type", deletefilterviewrequest_1.DeleteFilterViewRequest)
    ], Request.prototype, "deleteFilterView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteNamedRange" }),
        __metadata("design:type", deletenamedrangerequest_1.DeleteNamedRangeRequest)
    ], Request.prototype, "deleteNamedRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteProtectedRange" }),
        __metadata("design:type", deleteprotectedrangerequest_1.DeleteProtectedRangeRequest)
    ], Request.prototype, "deleteProtectedRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteRange" }),
        __metadata("design:type", deleterangerequest_1.DeleteRangeRequest)
    ], Request.prototype, "deleteRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteSheet" }),
        __metadata("design:type", deletesheetrequest_1.DeleteSheetRequest)
    ], Request.prototype, "deleteSheet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duplicateFilterView" }),
        __metadata("design:type", duplicatefilterviewrequest_1.DuplicateFilterViewRequest)
    ], Request.prototype, "duplicateFilterView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duplicateSheet" }),
        __metadata("design:type", duplicatesheetrequest_1.DuplicateSheetRequest)
    ], Request.prototype, "duplicateSheet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=findReplace" }),
        __metadata("design:type", findreplacerequest_1.FindReplaceRequest)
    ], Request.prototype, "findReplace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insertDimension" }),
        __metadata("design:type", insertdimensionrequest_1.InsertDimensionRequest)
    ], Request.prototype, "insertDimension", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insertRange" }),
        __metadata("design:type", insertrangerequest_1.InsertRangeRequest)
    ], Request.prototype, "insertRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mergeCells" }),
        __metadata("design:type", mergecellsrequest_1.MergeCellsRequest)
    ], Request.prototype, "mergeCells", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=moveDimension" }),
        __metadata("design:type", movedimensionrequest_1.MoveDimensionRequest)
    ], Request.prototype, "moveDimension", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pasteData" }),
        __metadata("design:type", pastedatarequest_1.PasteDataRequest)
    ], Request.prototype, "pasteData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=randomizeRange" }),
        __metadata("design:type", randomizerangerequest_1.RandomizeRangeRequest)
    ], Request.prototype, "randomizeRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refreshDataSource" }),
        __metadata("design:type", refreshdatasourcerequest_1.RefreshDataSourceRequest)
    ], Request.prototype, "refreshDataSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repeatCell" }),
        __metadata("design:type", repeatcellrequest_1.RepeatCellRequest)
    ], Request.prototype, "repeatCell", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=setBasicFilter" }),
        __metadata("design:type", setbasicfilterrequest_1.SetBasicFilterRequest)
    ], Request.prototype, "setBasicFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=setDataValidation" }),
        __metadata("design:type", setdatavalidationrequest_1.SetDataValidationRequest)
    ], Request.prototype, "setDataValidation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sortRange" }),
        __metadata("design:type", sortrangerequest_1.SortRangeRequest)
    ], Request.prototype, "sortRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=textToColumns" }),
        __metadata("design:type", texttocolumnsrequest_1.TextToColumnsRequest)
    ], Request.prototype, "textToColumns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trimWhitespace" }),
        __metadata("design:type", trimwhitespacerequest_1.TrimWhitespaceRequest)
    ], Request.prototype, "trimWhitespace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unmergeCells" }),
        __metadata("design:type", unmergecellsrequest_1.UnmergeCellsRequest)
    ], Request.prototype, "unmergeCells", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateBanding" }),
        __metadata("design:type", updatebandingrequest_1.UpdateBandingRequest)
    ], Request.prototype, "updateBanding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateBorders" }),
        __metadata("design:type", updatebordersrequest_1.UpdateBordersRequest)
    ], Request.prototype, "updateBorders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateCells" }),
        __metadata("design:type", updatecellsrequest_1.UpdateCellsRequest)
    ], Request.prototype, "updateCells", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateChartSpec" }),
        __metadata("design:type", updatechartspecrequest_1.UpdateChartSpecRequest)
    ], Request.prototype, "updateChartSpec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateConditionalFormatRule" }),
        __metadata("design:type", updateconditionalformatrulerequest_1.UpdateConditionalFormatRuleRequest)
    ], Request.prototype, "updateConditionalFormatRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateDataSource" }),
        __metadata("design:type", updatedatasourcerequest_1.UpdateDataSourceRequest)
    ], Request.prototype, "updateDataSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateDeveloperMetadata" }),
        __metadata("design:type", updatedevelopermetadatarequest_1.UpdateDeveloperMetadataRequest)
    ], Request.prototype, "updateDeveloperMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateDimensionGroup" }),
        __metadata("design:type", updatedimensiongrouprequest_1.UpdateDimensionGroupRequest)
    ], Request.prototype, "updateDimensionGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateDimensionProperties" }),
        __metadata("design:type", updatedimensionpropertiesrequest_1.UpdateDimensionPropertiesRequest)
    ], Request.prototype, "updateDimensionProperties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateEmbeddedObjectBorder" }),
        __metadata("design:type", updateembeddedobjectborderrequest_1.UpdateEmbeddedObjectBorderRequest)
    ], Request.prototype, "updateEmbeddedObjectBorder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateEmbeddedObjectPosition" }),
        __metadata("design:type", updateembeddedobjectpositionrequest_1.UpdateEmbeddedObjectPositionRequest)
    ], Request.prototype, "updateEmbeddedObjectPosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateFilterView" }),
        __metadata("design:type", updatefilterviewrequest_1.UpdateFilterViewRequest)
    ], Request.prototype, "updateFilterView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateNamedRange" }),
        __metadata("design:type", updatenamedrangerequest_1.UpdateNamedRangeRequest)
    ], Request.prototype, "updateNamedRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateProtectedRange" }),
        __metadata("design:type", updateprotectedrangerequest_1.UpdateProtectedRangeRequest)
    ], Request.prototype, "updateProtectedRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateSheetProperties" }),
        __metadata("design:type", updatesheetpropertiesrequest_1.UpdateSheetPropertiesRequest)
    ], Request.prototype, "updateSheetProperties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateSlicerSpec" }),
        __metadata("design:type", updateslicerspecrequest_1.UpdateSlicerSpecRequest)
    ], Request.prototype, "updateSlicerSpec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateSpreadsheetProperties" }),
        __metadata("design:type", updatespreadsheetpropertiesrequest_1.UpdateSpreadsheetPropertiesRequest)
    ], Request.prototype, "updateSpreadsheetProperties", void 0);
    return Request;
}(utils_1.SpeakeasyBase));
exports.Request = Request;
