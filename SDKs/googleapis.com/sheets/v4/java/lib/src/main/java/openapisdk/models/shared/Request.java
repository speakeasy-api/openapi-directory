package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Request
 * A single kind of update to apply to a spreadsheet.
**/
public class Request {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addBanding")
    public AddBandingRequest addBanding;
    public Request withAddBanding(AddBandingRequest addBanding) {
        this.addBanding = addBanding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addChart")
    public AddChartRequest addChart;
    public Request withAddChart(AddChartRequest addChart) {
        this.addChart = addChart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addConditionalFormatRule")
    public AddConditionalFormatRuleRequest addConditionalFormatRule;
    public Request withAddConditionalFormatRule(AddConditionalFormatRuleRequest addConditionalFormatRule) {
        this.addConditionalFormatRule = addConditionalFormatRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addDataSource")
    public AddDataSourceRequest addDataSource;
    public Request withAddDataSource(AddDataSourceRequest addDataSource) {
        this.addDataSource = addDataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addDimensionGroup")
    public AddDimensionGroupRequest addDimensionGroup;
    public Request withAddDimensionGroup(AddDimensionGroupRequest addDimensionGroup) {
        this.addDimensionGroup = addDimensionGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addFilterView")
    public AddFilterViewRequest addFilterView;
    public Request withAddFilterView(AddFilterViewRequest addFilterView) {
        this.addFilterView = addFilterView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addNamedRange")
    public AddNamedRangeRequest addNamedRange;
    public Request withAddNamedRange(AddNamedRangeRequest addNamedRange) {
        this.addNamedRange = addNamedRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addProtectedRange")
    public AddProtectedRangeRequest addProtectedRange;
    public Request withAddProtectedRange(AddProtectedRangeRequest addProtectedRange) {
        this.addProtectedRange = addProtectedRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addSheet")
    public AddSheetRequest addSheet;
    public Request withAddSheet(AddSheetRequest addSheet) {
        this.addSheet = addSheet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addSlicer")
    public AddSlicerRequest addSlicer;
    public Request withAddSlicer(AddSlicerRequest addSlicer) {
        this.addSlicer = addSlicer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appendCells")
    public AppendCellsRequest appendCells;
    public Request withAppendCells(AppendCellsRequest appendCells) {
        this.appendCells = appendCells;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appendDimension")
    public AppendDimensionRequest appendDimension;
    public Request withAppendDimension(AppendDimensionRequest appendDimension) {
        this.appendDimension = appendDimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoFill")
    public AutoFillRequest autoFill;
    public Request withAutoFill(AutoFillRequest autoFill) {
        this.autoFill = autoFill;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoResizeDimensions")
    public AutoResizeDimensionsRequest autoResizeDimensions;
    public Request withAutoResizeDimensions(AutoResizeDimensionsRequest autoResizeDimensions) {
        this.autoResizeDimensions = autoResizeDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clearBasicFilter")
    public ClearBasicFilterRequest clearBasicFilter;
    public Request withClearBasicFilter(ClearBasicFilterRequest clearBasicFilter) {
        this.clearBasicFilter = clearBasicFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyPaste")
    public CopyPasteRequest copyPaste;
    public Request withCopyPaste(CopyPasteRequest copyPaste) {
        this.copyPaste = copyPaste;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createDeveloperMetadata")
    public CreateDeveloperMetadataRequest createDeveloperMetadata;
    public Request withCreateDeveloperMetadata(CreateDeveloperMetadataRequest createDeveloperMetadata) {
        this.createDeveloperMetadata = createDeveloperMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cutPaste")
    public CutPasteRequest cutPaste;
    public Request withCutPaste(CutPasteRequest cutPaste) {
        this.cutPaste = cutPaste;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteBanding")
    public DeleteBandingRequest deleteBanding;
    public Request withDeleteBanding(DeleteBandingRequest deleteBanding) {
        this.deleteBanding = deleteBanding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteConditionalFormatRule")
    public DeleteConditionalFormatRuleRequest deleteConditionalFormatRule;
    public Request withDeleteConditionalFormatRule(DeleteConditionalFormatRuleRequest deleteConditionalFormatRule) {
        this.deleteConditionalFormatRule = deleteConditionalFormatRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteDataSource")
    public DeleteDataSourceRequest deleteDataSource;
    public Request withDeleteDataSource(DeleteDataSourceRequest deleteDataSource) {
        this.deleteDataSource = deleteDataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteDeveloperMetadata")
    public DeleteDeveloperMetadataRequest deleteDeveloperMetadata;
    public Request withDeleteDeveloperMetadata(DeleteDeveloperMetadataRequest deleteDeveloperMetadata) {
        this.deleteDeveloperMetadata = deleteDeveloperMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteDimension")
    public DeleteDimensionRequest deleteDimension;
    public Request withDeleteDimension(DeleteDimensionRequest deleteDimension) {
        this.deleteDimension = deleteDimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteDimensionGroup")
    public DeleteDimensionGroupRequest deleteDimensionGroup;
    public Request withDeleteDimensionGroup(DeleteDimensionGroupRequest deleteDimensionGroup) {
        this.deleteDimensionGroup = deleteDimensionGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteDuplicates")
    public DeleteDuplicatesRequest deleteDuplicates;
    public Request withDeleteDuplicates(DeleteDuplicatesRequest deleteDuplicates) {
        this.deleteDuplicates = deleteDuplicates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteEmbeddedObject")
    public DeleteEmbeddedObjectRequest deleteEmbeddedObject;
    public Request withDeleteEmbeddedObject(DeleteEmbeddedObjectRequest deleteEmbeddedObject) {
        this.deleteEmbeddedObject = deleteEmbeddedObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteFilterView")
    public DeleteFilterViewRequest deleteFilterView;
    public Request withDeleteFilterView(DeleteFilterViewRequest deleteFilterView) {
        this.deleteFilterView = deleteFilterView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteNamedRange")
    public DeleteNamedRangeRequest deleteNamedRange;
    public Request withDeleteNamedRange(DeleteNamedRangeRequest deleteNamedRange) {
        this.deleteNamedRange = deleteNamedRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteProtectedRange")
    public DeleteProtectedRangeRequest deleteProtectedRange;
    public Request withDeleteProtectedRange(DeleteProtectedRangeRequest deleteProtectedRange) {
        this.deleteProtectedRange = deleteProtectedRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteRange")
    public DeleteRangeRequest deleteRange;
    public Request withDeleteRange(DeleteRangeRequest deleteRange) {
        this.deleteRange = deleteRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteSheet")
    public DeleteSheetRequest deleteSheet;
    public Request withDeleteSheet(DeleteSheetRequest deleteSheet) {
        this.deleteSheet = deleteSheet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplicateFilterView")
    public DuplicateFilterViewRequest duplicateFilterView;
    public Request withDuplicateFilterView(DuplicateFilterViewRequest duplicateFilterView) {
        this.duplicateFilterView = duplicateFilterView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplicateSheet")
    public DuplicateSheetRequest duplicateSheet;
    public Request withDuplicateSheet(DuplicateSheetRequest duplicateSheet) {
        this.duplicateSheet = duplicateSheet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findReplace")
    public FindReplaceRequest findReplace;
    public Request withFindReplace(FindReplaceRequest findReplace) {
        this.findReplace = findReplace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertDimension")
    public InsertDimensionRequest insertDimension;
    public Request withInsertDimension(InsertDimensionRequest insertDimension) {
        this.insertDimension = insertDimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertRange")
    public InsertRangeRequest insertRange;
    public Request withInsertRange(InsertRangeRequest insertRange) {
        this.insertRange = insertRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mergeCells")
    public MergeCellsRequest mergeCells;
    public Request withMergeCells(MergeCellsRequest mergeCells) {
        this.mergeCells = mergeCells;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moveDimension")
    public MoveDimensionRequest moveDimension;
    public Request withMoveDimension(MoveDimensionRequest moveDimension) {
        this.moveDimension = moveDimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pasteData")
    public PasteDataRequest pasteData;
    public Request withPasteData(PasteDataRequest pasteData) {
        this.pasteData = pasteData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("randomizeRange")
    public RandomizeRangeRequest randomizeRange;
    public Request withRandomizeRange(RandomizeRangeRequest randomizeRange) {
        this.randomizeRange = randomizeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshDataSource")
    public RefreshDataSourceRequest refreshDataSource;
    public Request withRefreshDataSource(RefreshDataSourceRequest refreshDataSource) {
        this.refreshDataSource = refreshDataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeatCell")
    public RepeatCellRequest repeatCell;
    public Request withRepeatCell(RepeatCellRequest repeatCell) {
        this.repeatCell = repeatCell;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setBasicFilter")
    public SetBasicFilterRequest setBasicFilter;
    public Request withSetBasicFilter(SetBasicFilterRequest setBasicFilter) {
        this.setBasicFilter = setBasicFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setDataValidation")
    public SetDataValidationRequest setDataValidation;
    public Request withSetDataValidation(SetDataValidationRequest setDataValidation) {
        this.setDataValidation = setDataValidation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortRange")
    public SortRangeRequest sortRange;
    public Request withSortRange(SortRangeRequest sortRange) {
        this.sortRange = sortRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textToColumns")
    public TextToColumnsRequest textToColumns;
    public Request withTextToColumns(TextToColumnsRequest textToColumns) {
        this.textToColumns = textToColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trimWhitespace")
    public TrimWhitespaceRequest trimWhitespace;
    public Request withTrimWhitespace(TrimWhitespaceRequest trimWhitespace) {
        this.trimWhitespace = trimWhitespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unmergeCells")
    public UnmergeCellsRequest unmergeCells;
    public Request withUnmergeCells(UnmergeCellsRequest unmergeCells) {
        this.unmergeCells = unmergeCells;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateBanding")
    public UpdateBandingRequest updateBanding;
    public Request withUpdateBanding(UpdateBandingRequest updateBanding) {
        this.updateBanding = updateBanding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateBorders")
    public UpdateBordersRequest updateBorders;
    public Request withUpdateBorders(UpdateBordersRequest updateBorders) {
        this.updateBorders = updateBorders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateCells")
    public UpdateCellsRequest updateCells;
    public Request withUpdateCells(UpdateCellsRequest updateCells) {
        this.updateCells = updateCells;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateChartSpec")
    public UpdateChartSpecRequest updateChartSpec;
    public Request withUpdateChartSpec(UpdateChartSpecRequest updateChartSpec) {
        this.updateChartSpec = updateChartSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateConditionalFormatRule")
    public UpdateConditionalFormatRuleRequest updateConditionalFormatRule;
    public Request withUpdateConditionalFormatRule(UpdateConditionalFormatRuleRequest updateConditionalFormatRule) {
        this.updateConditionalFormatRule = updateConditionalFormatRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateDataSource")
    public UpdateDataSourceRequest updateDataSource;
    public Request withUpdateDataSource(UpdateDataSourceRequest updateDataSource) {
        this.updateDataSource = updateDataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateDeveloperMetadata")
    public UpdateDeveloperMetadataRequest updateDeveloperMetadata;
    public Request withUpdateDeveloperMetadata(UpdateDeveloperMetadataRequest updateDeveloperMetadata) {
        this.updateDeveloperMetadata = updateDeveloperMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateDimensionGroup")
    public UpdateDimensionGroupRequest updateDimensionGroup;
    public Request withUpdateDimensionGroup(UpdateDimensionGroupRequest updateDimensionGroup) {
        this.updateDimensionGroup = updateDimensionGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateDimensionProperties")
    public UpdateDimensionPropertiesRequest updateDimensionProperties;
    public Request withUpdateDimensionProperties(UpdateDimensionPropertiesRequest updateDimensionProperties) {
        this.updateDimensionProperties = updateDimensionProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateEmbeddedObjectBorder")
    public UpdateEmbeddedObjectBorderRequest updateEmbeddedObjectBorder;
    public Request withUpdateEmbeddedObjectBorder(UpdateEmbeddedObjectBorderRequest updateEmbeddedObjectBorder) {
        this.updateEmbeddedObjectBorder = updateEmbeddedObjectBorder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateEmbeddedObjectPosition")
    public UpdateEmbeddedObjectPositionRequest updateEmbeddedObjectPosition;
    public Request withUpdateEmbeddedObjectPosition(UpdateEmbeddedObjectPositionRequest updateEmbeddedObjectPosition) {
        this.updateEmbeddedObjectPosition = updateEmbeddedObjectPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateFilterView")
    public UpdateFilterViewRequest updateFilterView;
    public Request withUpdateFilterView(UpdateFilterViewRequest updateFilterView) {
        this.updateFilterView = updateFilterView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateNamedRange")
    public UpdateNamedRangeRequest updateNamedRange;
    public Request withUpdateNamedRange(UpdateNamedRangeRequest updateNamedRange) {
        this.updateNamedRange = updateNamedRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateProtectedRange")
    public UpdateProtectedRangeRequest updateProtectedRange;
    public Request withUpdateProtectedRange(UpdateProtectedRangeRequest updateProtectedRange) {
        this.updateProtectedRange = updateProtectedRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateSheetProperties")
    public UpdateSheetPropertiesRequest updateSheetProperties;
    public Request withUpdateSheetProperties(UpdateSheetPropertiesRequest updateSheetProperties) {
        this.updateSheetProperties = updateSheetProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateSlicerSpec")
    public UpdateSlicerSpecRequest updateSlicerSpec;
    public Request withUpdateSlicerSpec(UpdateSlicerSpecRequest updateSlicerSpec) {
        this.updateSlicerSpec = updateSlicerSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateSpreadsheetProperties")
    public UpdateSpreadsheetPropertiesRequest updateSpreadsheetProperties;
    public Request withUpdateSpreadsheetProperties(UpdateSpreadsheetPropertiesRequest updateSpreadsheetProperties) {
        this.updateSpreadsheetProperties = updateSpreadsheetProperties;
        return this;
    }
}