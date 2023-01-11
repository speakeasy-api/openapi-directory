package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StateNotificationConfig
 * The configuration for notification of new states received from the device.
**/
public class StateNotificationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubsubTopicName")
    public String pubsubTopicName;
    public StateNotificationConfig withPubsubTopicName(String pubsubTopicName) {
        this.pubsubTopicName = pubsubTopicName;
        return this;
    }
}