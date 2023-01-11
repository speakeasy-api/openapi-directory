package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyAckDeadlineRequest
 * Request for the ModifyAckDeadline method.
**/
public class ModifyAckDeadlineRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ackDeadlineSeconds")
    public Integer ackDeadlineSeconds;
    public ModifyAckDeadlineRequest withAckDeadlineSeconds(Integer ackDeadlineSeconds) {
        this.ackDeadlineSeconds = ackDeadlineSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ackId")
    public String ackId;
    public ModifyAckDeadlineRequest withAckId(String ackId) {
        this.ackId = ackId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ackIds")
    public String[] ackIds;
    public ModifyAckDeadlineRequest withAckIds(String[] ackIds) {
        this.ackIds = ackIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public String subscription;
    public ModifyAckDeadlineRequest withSubscription(String subscription) {
        this.subscription = subscription;
        return this;
    }
}