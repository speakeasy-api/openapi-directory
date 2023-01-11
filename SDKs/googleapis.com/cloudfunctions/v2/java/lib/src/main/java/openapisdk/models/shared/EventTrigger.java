package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventTrigger
 * Describes EventTrigger, used to request events to be sent from another service.
**/
public class EventTrigger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;
    public EventTrigger withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventFilters")
    public EventFilter[] eventFilters;
    public EventTrigger withEventFilters(EventFilter[] eventFilters) {
        this.eventFilters = eventFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public String eventType;
    public EventTrigger withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubsubTopic")
    public String pubsubTopic;
    public EventTrigger withPubsubTopic(String pubsubTopic) {
        this.pubsubTopic = pubsubTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryPolicy")
    public EventTriggerRetryPolicyEnum retryPolicy;
    public EventTrigger withRetryPolicy(EventTriggerRetryPolicyEnum retryPolicy) {
        this.retryPolicy = retryPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountEmail")
    public String serviceAccountEmail;
    public EventTrigger withServiceAccountEmail(String serviceAccountEmail) {
        this.serviceAccountEmail = serviceAccountEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger")
    public String trigger;
    public EventTrigger withTrigger(String trigger) {
        this.trigger = trigger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerRegion")
    public String triggerRegion;
    public EventTrigger withTriggerRegion(String triggerRegion) {
        this.triggerRegion = triggerRegion;
        return this;
    }
}