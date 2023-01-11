package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WatchTarget
 * The target for notification delivery.
**/
public class WatchTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public CloudPubsubTopic topic;
    public WatchTarget withTopic(CloudPubsubTopic topic) {
        this.topic = topic;
        return this;
    }
}