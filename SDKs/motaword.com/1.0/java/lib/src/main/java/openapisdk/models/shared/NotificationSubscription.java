package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NotificationSubscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public NotificationSubscriptionDeviceEnum device;
    public NotificationSubscription withDevice(NotificationSubscriptionDeviceEnum device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;
    public NotificationSubscription withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public NotificationSubscriptionTypeEnum type;
    public NotificationSubscription withType(NotificationSubscriptionTypeEnum type) {
        this.type = type;
        return this;
    }
}