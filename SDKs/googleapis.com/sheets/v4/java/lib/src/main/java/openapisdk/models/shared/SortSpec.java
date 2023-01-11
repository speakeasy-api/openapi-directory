package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SortSpec
 * A sort order associated with a specific column or row.
**/
public class SortSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundColor")
    public Color backgroundColor;
    public SortSpec withBackgroundColor(Color backgroundColor) {
        this.backgroundColor = backgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundColorStyle")
    public ColorStyle backgroundColorStyle;
    public SortSpec withBackgroundColorStyle(ColorStyle backgroundColorStyle) {
        this.backgroundColorStyle = backgroundColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceColumnReference")
    public DataSourceColumnReference dataSourceColumnReference;
    public SortSpec withDataSourceColumnReference(DataSourceColumnReference dataSourceColumnReference) {
        this.dataSourceColumnReference = dataSourceColumnReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionIndex")
    public Integer dimensionIndex;
    public SortSpec withDimensionIndex(Integer dimensionIndex) {
        this.dimensionIndex = dimensionIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foregroundColor")
    public Color foregroundColor;
    public SortSpec withForegroundColor(Color foregroundColor) {
        this.foregroundColor = foregroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foregroundColorStyle")
    public ColorStyle foregroundColorStyle;
    public SortSpec withForegroundColorStyle(ColorStyle foregroundColorStyle) {
        this.foregroundColorStyle = foregroundColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public SortSpecSortOrderEnum sortOrder;
    public SortSpec withSortOrder(SortSpecSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}