package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Settings1 {
    @JsonProperty("control_notifications")
    public Integer controlNotifications;
    public Settings1 withControlNotifications(Integer controlNotifications) {
        this.controlNotifications = controlNotifications;
        return this;
    }
}