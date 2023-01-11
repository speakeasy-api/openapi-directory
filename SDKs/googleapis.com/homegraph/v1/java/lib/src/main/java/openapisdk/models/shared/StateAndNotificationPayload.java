package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StateAndNotificationPayload
 * Payload containing the state and notification information for devices.
**/
public class StateAndNotificationPayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public ReportStateAndNotificationDevice devices;
    public StateAndNotificationPayload withDevices(ReportStateAndNotificationDevice devices) {
        this.devices = devices;
        return this;
    }
}