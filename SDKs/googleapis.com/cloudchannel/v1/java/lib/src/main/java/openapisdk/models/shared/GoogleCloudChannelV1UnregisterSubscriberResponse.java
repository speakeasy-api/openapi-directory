package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1UnregisterSubscriberResponse
 * Response Message for UnregisterSubscriber.
**/
public class GoogleCloudChannelV1UnregisterSubscriberResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public GoogleCloudChannelV1UnregisterSubscriberResponse withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}