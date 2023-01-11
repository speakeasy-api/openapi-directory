package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PivotGroup
 * A single grouping (either row or column) in a pivot table.
**/
public class PivotGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceColumnReference")
    public DataSourceColumnReference dataSourceColumnReference;
    public PivotGroup withDataSourceColumnReference(DataSourceColumnReference dataSourceColumnReference) {
        this.dataSourceColumnReference = dataSourceColumnReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupLimit")
    public PivotGroupLimit groupLimit;
    public PivotGroup withGroupLimit(PivotGroupLimit groupLimit) {
        this.groupLimit = groupLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupRule")
    public PivotGroupRule groupRule;
    public PivotGroup withGroupRule(PivotGroupRule groupRule) {
        this.groupRule = groupRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public PivotGroup withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeatHeadings")
    public Boolean repeatHeadings;
    public PivotGroup withRepeatHeadings(Boolean repeatHeadings) {
        this.repeatHeadings = repeatHeadings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showTotals")
    public Boolean showTotals;
    public PivotGroup withShowTotals(Boolean showTotals) {
        this.showTotals = showTotals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public PivotGroupSortOrderEnum sortOrder;
    public PivotGroup withSortOrder(PivotGroupSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceColumnOffset")
    public Integer sourceColumnOffset;
    public PivotGroup withSourceColumnOffset(Integer sourceColumnOffset) {
        this.sourceColumnOffset = sourceColumnOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueBucket")
    public PivotGroupSortValueBucket valueBucket;
    public PivotGroup withValueBucket(PivotGroupSortValueBucket valueBucket) {
        this.valueBucket = valueBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueMetadata")
    public PivotGroupValueMetadata[] valueMetadata;
    public PivotGroup withValueMetadata(PivotGroupValueMetadata[] valueMetadata) {
        this.valueMetadata = valueMetadata;
        return this;
    }
}