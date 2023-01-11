package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HealthInformationNotificationNotificationNotifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public HealthInformationNotificationNotificationNotifier withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public HealthInformationNotificationNotificationNotifierTypeEnum type;
    public HealthInformationNotificationNotificationNotifier withType(HealthInformationNotificationNotificationNotifierTypeEnum type) {
        this.type = type;
        return this;
    }
}