package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilterSpec
 * The filter criteria associated with a specific column.
**/
public class FilterSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnIndex")
    public Integer columnIndex;
    public FilterSpec withColumnIndex(Integer columnIndex) {
        this.columnIndex = columnIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceColumnReference")
    public DataSourceColumnReference dataSourceColumnReference;
    public FilterSpec withDataSourceColumnReference(DataSourceColumnReference dataSourceColumnReference) {
        this.dataSourceColumnReference = dataSourceColumnReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterCriteria")
    public FilterCriteria filterCriteria;
    public FilterSpec withFilterCriteria(FilterCriteria filterCriteria) {
        this.filterCriteria = filterCriteria;
        return this;
    }
}