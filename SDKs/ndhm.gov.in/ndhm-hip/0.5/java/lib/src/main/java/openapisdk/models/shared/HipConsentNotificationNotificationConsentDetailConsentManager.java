package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HipConsentNotificationNotificationConsentDetailConsentManager {
    @JsonProperty("id")
    public String id;
    public HipConsentNotificationNotificationConsentDetailConsentManager withId(String id) {
        this.id = id;
        return this;
    }
}