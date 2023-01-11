package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CalendarListEntryNotificationSettings
 * The notifications that the authenticated user is receiving for this calendar.
**/
public class CalendarListEntryNotificationSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications")
    public CalendarNotification[] notifications;
    public CalendarListEntryNotificationSettings withNotifications(CalendarNotification[] notifications) {
        this.notifications = notifications;
        return this;
    }
}