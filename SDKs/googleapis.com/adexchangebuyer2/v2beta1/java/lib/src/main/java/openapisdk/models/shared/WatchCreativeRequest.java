package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WatchCreativeRequest
 * A request for watching changes to creative Status.
**/
public class WatchCreativeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public WatchCreativeRequest withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}