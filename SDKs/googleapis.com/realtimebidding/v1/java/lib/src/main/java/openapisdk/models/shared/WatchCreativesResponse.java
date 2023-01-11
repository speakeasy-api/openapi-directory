package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WatchCreativesResponse
 * A response for the request to receive push notification when a bidder's creatives change status.
**/
public class WatchCreativesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public String subscription;
    public WatchCreativesResponse withSubscription(String subscription) {
        this.subscription = subscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public WatchCreativesResponse withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}