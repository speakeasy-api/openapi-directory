package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Pubsub
 * Represents a Pub/Sub transport.
**/
public class Pubsub {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public String subscription;
    public Pubsub withSubscription(String subscription) {
        this.subscription = subscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public Pubsub withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}