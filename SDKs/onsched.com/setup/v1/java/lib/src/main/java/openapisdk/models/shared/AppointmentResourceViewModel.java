package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppointmentResourceViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointmentId")
    public String appointmentId;
    public AppointmentResourceViewModel withAppointmentId(String appointmentId) {
        this.appointmentId = appointmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public String resourceId;
    public AppointmentResourceViewModel withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}