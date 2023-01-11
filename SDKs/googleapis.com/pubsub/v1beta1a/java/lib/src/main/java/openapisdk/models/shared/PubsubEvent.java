package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PubsubEvent
 * An event indicating a received message or truncation event.
**/
public class PubsubEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public PubsubEvent withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public PubsubMessage message;
    public PubsubEvent withMessage(PubsubMessage message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public String subscription;
    public PubsubEvent withSubscription(String subscription) {
        this.subscription = subscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("truncated")
    public Boolean truncated;
    public PubsubEvent withTruncated(Boolean truncated) {
        this.truncated = truncated;
        return this;
    }
}