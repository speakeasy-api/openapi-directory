package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PivotFilterSpec
 * The pivot table filter criteria associated with a specific source column offset.
**/
public class PivotFilterSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnOffsetIndex")
    public Integer columnOffsetIndex;
    public PivotFilterSpec withColumnOffsetIndex(Integer columnOffsetIndex) {
        this.columnOffsetIndex = columnOffsetIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceColumnReference")
    public DataSourceColumnReference dataSourceColumnReference;
    public PivotFilterSpec withDataSourceColumnReference(DataSourceColumnReference dataSourceColumnReference) {
        this.dataSourceColumnReference = dataSourceColumnReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterCriteria")
    public PivotFilterCriteria filterCriteria;
    public PivotFilterSpec withFilterCriteria(PivotFilterCriteria filterCriteria) {
        this.filterCriteria = filterCriteria;
        return this;
    }
}