package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PubsubInput
 * Represents a Pub/Sub transport.
**/
public class PubsubInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public PubsubInput withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}