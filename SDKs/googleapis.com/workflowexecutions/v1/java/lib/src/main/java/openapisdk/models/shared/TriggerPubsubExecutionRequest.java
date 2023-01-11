package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TriggerPubsubExecutionRequest
 * Request for the TriggerPubsubExecution method.
**/
public class TriggerPubsubExecutionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GCPCloudEventsMode")
    public String gcpCloudEventsMode;
    public TriggerPubsubExecutionRequest withGcpCloudEventsMode(String gcpCloudEventsMode) {
        this.gcpCloudEventsMode = gcpCloudEventsMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public PubsubMessage message;
    public TriggerPubsubExecutionRequest withMessage(PubsubMessage message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public String subscription;
    public TriggerPubsubExecutionRequest withSubscription(String subscription) {
        this.subscription = subscription;
        return this;
    }
}