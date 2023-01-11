package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PullBatchRequest
 * Request for the PullBatch method.
**/
public class PullBatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxEvents")
    public Integer maxEvents;
    public PullBatchRequest withMaxEvents(Integer maxEvents) {
        this.maxEvents = maxEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnImmediately")
    public Boolean returnImmediately;
    public PullBatchRequest withReturnImmediately(Boolean returnImmediately) {
        this.returnImmediately = returnImmediately;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public String subscription;
    public PullBatchRequest withSubscription(String subscription) {
        this.subscription = subscription;
        return this;
    }
}