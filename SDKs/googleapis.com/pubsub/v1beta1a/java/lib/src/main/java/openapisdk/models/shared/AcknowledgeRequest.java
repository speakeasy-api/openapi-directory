package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AcknowledgeRequest
 * Request for the Acknowledge method.
**/
public class AcknowledgeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ackId")
    public String[] ackId;
    public AcknowledgeRequest withAckId(String[] ackId) {
        this.ackId = ackId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public String subscription;
    public AcknowledgeRequest withSubscription(String subscription) {
        this.subscription = subscription;
        return this;
    }
}