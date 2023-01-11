package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Response
 * A single response from an update.
**/
public class Response {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addBanding")
    public AddBandingResponse addBanding;
    public Response withAddBanding(AddBandingResponse addBanding) {
        this.addBanding = addBanding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addChart")
    public AddChartResponse addChart;
    public Response withAddChart(AddChartResponse addChart) {
        this.addChart = addChart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addDataSource")
    public AddDataSourceResponse addDataSource;
    public Response withAddDataSource(AddDataSourceResponse addDataSource) {
        this.addDataSource = addDataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addDimensionGroup")
    public AddDimensionGroupResponse addDimensionGroup;
    public Response withAddDimensionGroup(AddDimensionGroupResponse addDimensionGroup) {
        this.addDimensionGroup = addDimensionGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addFilterView")
    public AddFilterViewResponse addFilterView;
    public Response withAddFilterView(AddFilterViewResponse addFilterView) {
        this.addFilterView = addFilterView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addNamedRange")
    public AddNamedRangeResponse addNamedRange;
    public Response withAddNamedRange(AddNamedRangeResponse addNamedRange) {
        this.addNamedRange = addNamedRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addProtectedRange")
    public AddProtectedRangeResponse addProtectedRange;
    public Response withAddProtectedRange(AddProtectedRangeResponse addProtectedRange) {
        this.addProtectedRange = addProtectedRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addSheet")
    public AddSheetResponse addSheet;
    public Response withAddSheet(AddSheetResponse addSheet) {
        this.addSheet = addSheet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addSlicer")
    public AddSlicerResponse addSlicer;
    public Response withAddSlicer(AddSlicerResponse addSlicer) {
        this.addSlicer = addSlicer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createDeveloperMetadata")
    public CreateDeveloperMetadataResponse createDeveloperMetadata;
    public Response withCreateDeveloperMetadata(CreateDeveloperMetadataResponse createDeveloperMetadata) {
        this.createDeveloperMetadata = createDeveloperMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteConditionalFormatRule")
    public DeleteConditionalFormatRuleResponse deleteConditionalFormatRule;
    public Response withDeleteConditionalFormatRule(DeleteConditionalFormatRuleResponse deleteConditionalFormatRule) {
        this.deleteConditionalFormatRule = deleteConditionalFormatRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteDeveloperMetadata")
    public DeleteDeveloperMetadataResponse deleteDeveloperMetadata;
    public Response withDeleteDeveloperMetadata(DeleteDeveloperMetadataResponse deleteDeveloperMetadata) {
        this.deleteDeveloperMetadata = deleteDeveloperMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteDimensionGroup")
    public DeleteDimensionGroupResponse deleteDimensionGroup;
    public Response withDeleteDimensionGroup(DeleteDimensionGroupResponse deleteDimensionGroup) {
        this.deleteDimensionGroup = deleteDimensionGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteDuplicates")
    public DeleteDuplicatesResponse deleteDuplicates;
    public Response withDeleteDuplicates(DeleteDuplicatesResponse deleteDuplicates) {
        this.deleteDuplicates = deleteDuplicates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplicateFilterView")
    public DuplicateFilterViewResponse duplicateFilterView;
    public Response withDuplicateFilterView(DuplicateFilterViewResponse duplicateFilterView) {
        this.duplicateFilterView = duplicateFilterView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplicateSheet")
    public DuplicateSheetResponse duplicateSheet;
    public Response withDuplicateSheet(DuplicateSheetResponse duplicateSheet) {
        this.duplicateSheet = duplicateSheet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findReplace")
    public FindReplaceResponse findReplace;
    public Response withFindReplace(FindReplaceResponse findReplace) {
        this.findReplace = findReplace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshDataSource")
    public RefreshDataSourceResponse refreshDataSource;
    public Response withRefreshDataSource(RefreshDataSourceResponse refreshDataSource) {
        this.refreshDataSource = refreshDataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trimWhitespace")
    public TrimWhitespaceResponse trimWhitespace;
    public Response withTrimWhitespace(TrimWhitespaceResponse trimWhitespace) {
        this.trimWhitespace = trimWhitespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateConditionalFormatRule")
    public UpdateConditionalFormatRuleResponse updateConditionalFormatRule;
    public Response withUpdateConditionalFormatRule(UpdateConditionalFormatRuleResponse updateConditionalFormatRule) {
        this.updateConditionalFormatRule = updateConditionalFormatRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateDataSource")
    public UpdateDataSourceResponse updateDataSource;
    public Response withUpdateDataSource(UpdateDataSourceResponse updateDataSource) {
        this.updateDataSource = updateDataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateDeveloperMetadata")
    public UpdateDeveloperMetadataResponse updateDeveloperMetadata;
    public Response withUpdateDeveloperMetadata(UpdateDeveloperMetadataResponse updateDeveloperMetadata) {
        this.updateDeveloperMetadata = updateDeveloperMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateEmbeddedObjectPosition")
    public UpdateEmbeddedObjectPositionResponse updateEmbeddedObjectPosition;
    public Response withUpdateEmbeddedObjectPosition(UpdateEmbeddedObjectPositionResponse updateEmbeddedObjectPosition) {
        this.updateEmbeddedObjectPosition = updateEmbeddedObjectPosition;
        return this;
    }
}