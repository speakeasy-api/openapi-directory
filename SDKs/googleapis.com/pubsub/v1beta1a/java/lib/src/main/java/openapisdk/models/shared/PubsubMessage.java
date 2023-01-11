package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PubsubMessage
 * A message data and its labels.
**/
public class PubsubMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public PubsubMessage withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public Label[] label;
    public PubsubMessage withLabel(Label[] label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageId")
    public String messageId;
    public PubsubMessage withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishTime")
    public String publishTime;
    public PubsubMessage withPublishTime(String publishTime) {
        this.publishTime = publishTime;
        return this;
    }
}