package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1RegisterSubscriberResponse
 * Response Message for RegisterSubscriber.
**/
public class GoogleCloudChannelV1RegisterSubscriberResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public GoogleCloudChannelV1RegisterSubscriberResponse withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}