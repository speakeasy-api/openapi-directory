package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublishRequest
 * Request for the Publish method.
**/
public class PublishRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public PubsubMessage message;
    public PublishRequest withMessage(PubsubMessage message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public PublishRequest withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}