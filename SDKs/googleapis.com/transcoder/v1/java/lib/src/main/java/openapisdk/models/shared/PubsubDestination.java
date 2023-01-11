package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PubsubDestination
 * A Pub/Sub destination.
**/
public class PubsubDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public PubsubDestination withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}