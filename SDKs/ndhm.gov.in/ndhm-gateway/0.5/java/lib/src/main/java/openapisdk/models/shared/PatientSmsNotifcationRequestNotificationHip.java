package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientSmsNotifcationRequestNotificationHip {
    @JsonProperty("id")
    public String id;
    public PatientSmsNotifcationRequestNotificationHip withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PatientSmsNotifcationRequestNotificationHip withName(String name) {
        this.name = name;
        return this;
    }
}