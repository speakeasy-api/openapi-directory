package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportStateAndNotificationDevice
 * The states and notifications specific to a device.
**/
public class ReportStateAndNotificationDevice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications")
    public java.util.Map<String, Object> notifications;
    public ReportStateAndNotificationDevice withNotifications(java.util.Map<String, Object> notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("states")
    public java.util.Map<String, Object> states;
    public ReportStateAndNotificationDevice withStates(java.util.Map<String, Object> states) {
        this.states = states;
        return this;
    }
}