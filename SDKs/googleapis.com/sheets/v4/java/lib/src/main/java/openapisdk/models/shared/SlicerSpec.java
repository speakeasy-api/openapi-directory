package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SlicerSpec
 * The specifications of a slicer.
**/
public class SlicerSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyToPivotTables")
    public Boolean applyToPivotTables;
    public SlicerSpec withApplyToPivotTables(Boolean applyToPivotTables) {
        this.applyToPivotTables = applyToPivotTables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundColor")
    public Color backgroundColor;
    public SlicerSpec withBackgroundColor(Color backgroundColor) {
        this.backgroundColor = backgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundColorStyle")
    public ColorStyle backgroundColorStyle;
    public SlicerSpec withBackgroundColorStyle(ColorStyle backgroundColorStyle) {
        this.backgroundColorStyle = backgroundColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnIndex")
    public Integer columnIndex;
    public SlicerSpec withColumnIndex(Integer columnIndex) {
        this.columnIndex = columnIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataRange")
    public GridRange dataRange;
    public SlicerSpec withDataRange(GridRange dataRange) {
        this.dataRange = dataRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterCriteria")
    public FilterCriteria filterCriteria;
    public SlicerSpec withFilterCriteria(FilterCriteria filterCriteria) {
        this.filterCriteria = filterCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("horizontalAlignment")
    public SlicerSpecHorizontalAlignmentEnum horizontalAlignment;
    public SlicerSpec withHorizontalAlignment(SlicerSpecHorizontalAlignmentEnum horizontalAlignment) {
        this.horizontalAlignment = horizontalAlignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textFormat")
    public TextFormat textFormat;
    public SlicerSpec withTextFormat(TextFormat textFormat) {
        this.textFormat = textFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public SlicerSpec withTitle(String title) {
        this.title = title;
        return this;
    }
}