package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HealthInformationNotificationNotificationNotifier {
    @JsonProperty("id")
    public String id;
    public HealthInformationNotificationNotificationNotifier withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public HealthInformationNotificationNotificationNotifierTypeEnum type;
    public HealthInformationNotificationNotificationNotifier withType(HealthInformationNotificationNotificationNotifierTypeEnum type) {
        this.type = type;
        return this;
    }
}