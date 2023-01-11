package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchClearValuesRequest
 * The request for clearing more than one range of values in a spreadsheet.
**/
public class BatchClearValuesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ranges")
    public String[] ranges;
    public BatchClearValuesRequest withRanges(String[] ranges) {
        this.ranges = ranges;
        return this;
    }
}