package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PubsubMessage
 * A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits.
**/
public class PubsubMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public PubsubMessage withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public PubsubMessage withData(String data) {
        this.data = data;
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
    @JsonProperty("orderingKey")
    public String orderingKey;
    public PubsubMessage withOrderingKey(String orderingKey) {
        this.orderingKey = orderingKey;
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