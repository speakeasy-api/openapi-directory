package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RandomizeRangeRequest
 * Randomizes the order of the rows in a range.
**/
public class RandomizeRangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public RandomizeRangeRequest withRange(GridRange range) {
        this.range = range;
        return this;
    }
}