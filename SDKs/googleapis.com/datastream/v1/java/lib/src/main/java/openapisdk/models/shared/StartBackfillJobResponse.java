package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartBackfillJobResponse
 * Response for manually initiating a backfill job for a specific stream object.
**/
public class StartBackfillJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public StreamObject object;
    public StartBackfillJobResponse withObject(StreamObject object) {
        this.object = object;
        return this;
    }
}