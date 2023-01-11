package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublishBatchRequest
 * Request for the PublishBatch method.
**/
public class PublishBatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public PubsubMessage[] messages;
    public PublishBatchRequest withMessages(PubsubMessage[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public PublishBatchRequest withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}