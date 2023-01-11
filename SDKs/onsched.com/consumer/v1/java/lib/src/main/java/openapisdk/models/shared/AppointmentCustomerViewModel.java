package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppointmentCustomerViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointmentId")
    public String appointmentId;
    public AppointmentCustomerViewModel withAppointmentId(String appointmentId) {
        this.appointmentId = appointmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public AppointmentCustomerViewModel withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}