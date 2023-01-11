package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionCreateRequest
 * New webhook settings for an app.
**/
public class SubscriptionCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public SubscriptionCreateRequest withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("eventType")
    public SubscriptionCreateRequestEventTypeEnum eventType;
    public SubscriptionCreateRequest withEventType(SubscriptionCreateRequestEventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyName")
    public String propertyName;
    public SubscriptionCreateRequest withPropertyName(String propertyName) {
        this.propertyName = propertyName;
        return this;
    }
}