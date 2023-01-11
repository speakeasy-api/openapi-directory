package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventTriggerInput
 * Describes EventTrigger, used to request events to be sent from another service.
**/
public class EventTriggerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;
    public EventTriggerInput withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventFilters")
    public EventFilter[] eventFilters;
    public EventTriggerInput withEventFilters(EventFilter[] eventFilters) {
        this.eventFilters = eventFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public String eventType;
    public EventTriggerInput withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubsubTopic")
    public String pubsubTopic;
    public EventTriggerInput withPubsubTopic(String pubsubTopic) {
        this.pubsubTopic = pubsubTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryPolicy")
    public EventTriggerRetryPolicyEnum retryPolicy;
    public EventTriggerInput withRetryPolicy(EventTriggerRetryPolicyEnum retryPolicy) {
        this.retryPolicy = retryPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountEmail")
    public String serviceAccountEmail;
    public EventTriggerInput withServiceAccountEmail(String serviceAccountEmail) {
        this.serviceAccountEmail = serviceAccountEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerRegion")
    public String triggerRegion;
    public EventTriggerInput withTriggerRegion(String triggerRegion) {
        this.triggerRegion = triggerRegion;
        return this;
    }
}