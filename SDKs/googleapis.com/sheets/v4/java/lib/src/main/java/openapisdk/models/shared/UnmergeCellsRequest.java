package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UnmergeCellsRequest
 * Unmerges cells in the given range.
**/
public class UnmergeCellsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public UnmergeCellsRequest withRange(GridRange range) {
        this.range = range;
        return this;
    }
}