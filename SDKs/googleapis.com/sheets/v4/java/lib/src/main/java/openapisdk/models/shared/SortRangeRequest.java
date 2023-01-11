package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SortRangeRequest
 * Sorts data in rows based on a sort order per column.
**/
public class SortRangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public SortRangeRequest withRange(GridRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortSpecs")
    public SortSpec[] sortSpecs;
    public SortRangeRequest withSortSpecs(SortSpec[] sortSpecs) {
        this.sortSpecs = sortSpecs;
        return this;
    }
}