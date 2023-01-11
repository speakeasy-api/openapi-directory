package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppointmentBookModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerMessage")
    public String customerMessage;
    public AppointmentBookModel withCustomerMessage(String customerMessage) {
        this.customerMessage = customerMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public AppointmentBookModel withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupSize")
    public Integer groupSize;
    public AppointmentBookModel withGroupSize(Integer groupSize) {
        this.groupSize = groupSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AppointmentBookModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public AppointmentBookModel withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public AppointmentBookModel withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneExt")
    public String phoneExt;
    public AppointmentBookModel withPhoneExt(String phoneExt) {
        this.phoneExt = phoneExt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneType")
    public String phoneType;
    public AppointmentBookModel withPhoneType(String phoneType) {
        this.phoneType = phoneType;
        return this;
    }
}