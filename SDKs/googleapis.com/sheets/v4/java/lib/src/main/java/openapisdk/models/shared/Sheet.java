package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Sheet
 * A sheet in a spreadsheet.
**/
public class Sheet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandedRanges")
    public BandedRange[] bandedRanges;
    public Sheet withBandedRanges(BandedRange[] bandedRanges) {
        this.bandedRanges = bandedRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicFilter")
    public BasicFilter basicFilter;
    public Sheet withBasicFilter(BasicFilter basicFilter) {
        this.basicFilter = basicFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charts")
    public EmbeddedChart[] charts;
    public Sheet withCharts(EmbeddedChart[] charts) {
        this.charts = charts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnGroups")
    public DimensionGroup[] columnGroups;
    public Sheet withColumnGroups(DimensionGroup[] columnGroups) {
        this.columnGroups = columnGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditionalFormats")
    public ConditionalFormatRule[] conditionalFormats;
    public Sheet withConditionalFormats(ConditionalFormatRule[] conditionalFormats) {
        this.conditionalFormats = conditionalFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public GridData[] data;
    public Sheet withData(GridData[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerMetadata")
    public DeveloperMetadata[] developerMetadata;
    public Sheet withDeveloperMetadata(DeveloperMetadata[] developerMetadata) {
        this.developerMetadata = developerMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterViews")
    public FilterView[] filterViews;
    public Sheet withFilterViews(FilterView[] filterViews) {
        this.filterViews = filterViews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merges")
    public GridRange[] merges;
    public Sheet withMerges(GridRange[] merges) {
        this.merges = merges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public SheetProperties properties;
    public Sheet withProperties(SheetProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectedRanges")
    public ProtectedRange[] protectedRanges;
    public Sheet withProtectedRanges(ProtectedRange[] protectedRanges) {
        this.protectedRanges = protectedRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowGroups")
    public DimensionGroup[] rowGroups;
    public Sheet withRowGroups(DimensionGroup[] rowGroups) {
        this.rowGroups = rowGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slicers")
    public Slicer[] slicers;
    public Sheet withSlicers(Slicer[] slicers) {
        this.slicers = slicers;
        return this;
    }
}