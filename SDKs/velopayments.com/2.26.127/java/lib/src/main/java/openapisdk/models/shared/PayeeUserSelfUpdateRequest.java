package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PayeeUserSelfUpdateRequest
 * <p>All properties are optional</p>
 * <p>Only provided properties will be updated</p>
 * <p>Use null to null out a property that is allowed to be nullable</p>
 * 
**/
public class PayeeUserSelfUpdateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PayeeUserSelfUpdateRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public PayeeUserSelfUpdateRequest withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public PayeeUserSelfUpdateRequest withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryContactNumber")
    public String primaryContactNumber;
    public PayeeUserSelfUpdateRequest withPrimaryContactNumber(String primaryContactNumber) {
        this.primaryContactNumber = primaryContactNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryContactNumber")
    public String secondaryContactNumber;
    public PayeeUserSelfUpdateRequest withSecondaryContactNumber(String secondaryContactNumber) {
        this.secondaryContactNumber = secondaryContactNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smsNumber")
    public String smsNumber;
    public PayeeUserSelfUpdateRequest withSmsNumber(String smsNumber) {
        this.smsNumber = smsNumber;
        return this;
    }
}