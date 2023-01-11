package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StopBackfillJobResponse
 * Response for manually stop a backfill job for a specific stream object.
**/
public class StopBackfillJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public StreamObject object;
    public StopBackfillJobResponse withObject(StreamObject object) {
        this.object = object;
        return this;
    }
}