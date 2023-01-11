package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HipConsentNotificationNotificationConsentDetailHip {
    @JsonProperty("id")
    public String id;
    public HipConsentNotificationNotificationConsentDetailHip withId(String id) {
        this.id = id;
        return this;
    }
}