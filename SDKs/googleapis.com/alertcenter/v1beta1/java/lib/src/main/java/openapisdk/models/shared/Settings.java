package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Settings
 * Customer-level settings.
**/
public class Settings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications")
    public Notification[] notifications;
    public Settings withNotifications(Notification[] notifications) {
        this.notifications = notifications;
        return this;
    }
}