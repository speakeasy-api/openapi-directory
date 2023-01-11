package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlertStrategy
 * Control over how the notification channels in notification_channels are notified when this alert fires.
**/
public class AlertStrategy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoClose")
    public String autoClose;
    public AlertStrategy withAutoClose(String autoClose) {
        this.autoClose = autoClose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationRateLimit")
    public NotificationRateLimit notificationRateLimit;
    public AlertStrategy withNotificationRateLimit(NotificationRateLimit notificationRateLimit) {
        this.notificationRateLimit = notificationRateLimit;
        return this;
    }
}