package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PullBatchResponse
 * Response for the PullBatch method.
**/
public class PullBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullResponses")
    public PullResponse[] pullResponses;
    public PullBatchResponse withPullResponses(PullResponse[] pullResponses) {
        this.pullResponses = pullResponses;
        return this;
    }
}