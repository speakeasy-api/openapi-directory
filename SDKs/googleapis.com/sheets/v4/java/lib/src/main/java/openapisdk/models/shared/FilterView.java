package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilterView
 * A filter view.
**/
public class FilterView {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criteria")
    public java.util.Map<String, FilterCriteria> criteria;
    public FilterView withCriteria(java.util.Map<String, FilterCriteria> criteria) {
        this.criteria = criteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterSpecs")
    public FilterSpec[] filterSpecs;
    public FilterView withFilterSpecs(FilterSpec[] filterSpecs) {
        this.filterSpecs = filterSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterViewId")
    public Integer filterViewId;
    public FilterView withFilterViewId(Integer filterViewId) {
        this.filterViewId = filterViewId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namedRangeId")
    public String namedRangeId;
    public FilterView withNamedRangeId(String namedRangeId) {
        this.namedRangeId = namedRangeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public FilterView withRange(GridRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortSpecs")
    public SortSpec[] sortSpecs;
    public FilterView withSortSpecs(SortSpec[] sortSpecs) {
        this.sortSpecs = sortSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public FilterView withTitle(String title) {
        this.title = title;
        return this;
    }
}