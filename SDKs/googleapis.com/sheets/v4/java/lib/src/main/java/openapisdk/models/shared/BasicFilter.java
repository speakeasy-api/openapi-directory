package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicFilter
 * The default filter associated with a sheet.
**/
public class BasicFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criteria")
    public java.util.Map<String, FilterCriteria> criteria;
    public BasicFilter withCriteria(java.util.Map<String, FilterCriteria> criteria) {
        this.criteria = criteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterSpecs")
    public FilterSpec[] filterSpecs;
    public BasicFilter withFilterSpecs(FilterSpec[] filterSpecs) {
        this.filterSpecs = filterSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public BasicFilter withRange(GridRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortSpecs")
    public SortSpec[] sortSpecs;
    public BasicFilter withSortSpecs(SortSpec[] sortSpecs) {
        this.sortSpecs = sortSpecs;
        return this;
    }
}