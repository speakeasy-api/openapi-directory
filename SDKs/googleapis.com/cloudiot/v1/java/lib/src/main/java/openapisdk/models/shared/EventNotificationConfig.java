package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventNotificationConfig
 * The configuration for forwarding telemetry events.
**/
public class EventNotificationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubsubTopicName")
    public String pubsubTopicName;
    public EventNotificationConfig withPubsubTopicName(String pubsubTopicName) {
        this.pubsubTopicName = pubsubTopicName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subfolderMatches")
    public String subfolderMatches;
    public EventNotificationConfig withSubfolderMatches(String subfolderMatches) {
        this.subfolderMatches = subfolderMatches;
        return this;
    }
}