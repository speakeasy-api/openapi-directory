package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppointmentReserveModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerMessage")
    public String customerMessage;
    public AppointmentReserveModel withCustomerMessage(String customerMessage) {
        this.customerMessage = customerMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public AppointmentReserveModel withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AppointmentReserveModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public AppointmentReserveModel withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public AppointmentReserveModel withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneExt")
    public String phoneExt;
    public AppointmentReserveModel withPhoneExt(String phoneExt) {
        this.phoneExt = phoneExt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneType")
    public String phoneType;
    public AppointmentReserveModel withPhoneType(String phoneType) {
        this.phoneType = phoneType;
        return this;
    }
}