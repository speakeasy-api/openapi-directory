package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PubsubTarget
 * Pub/Sub target. The job will be delivered by publishing a message to the given Pub/Sub topic.
**/
public class PubsubTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public PubsubTarget withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public PubsubTarget withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicName")
    public String topicName;
    public PubsubTarget withTopicName(String topicName) {
        this.topicName = topicName;
        return this;
    }
}