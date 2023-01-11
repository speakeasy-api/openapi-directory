package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Getcurrentstate {
    @JsonProperty("notifications_enabled")
    public Boolean notificationsEnabled;
    public Getcurrentstate withNotificationsEnabled(Boolean notificationsEnabled) {
        this.notificationsEnabled = notificationsEnabled;
        return this;
    }
}