package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserDetailsUpdateRequest
 * <p>All properties are optional</p>
 * <p>Only provided properties will be updated</p>
 * <p>Use null to null out a property that is allowed to be nullable</p>
 * 
**/
public class UserDetailsUpdateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserDetailsUpdateRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public UserDetailsUpdateRequest withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public UserDetailsUpdateRequest withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfaType")
    public MfaTypeEnum mfaType;
    public UserDetailsUpdateRequest withMfaType(MfaTypeEnum mfaType) {
        this.mfaType = mfaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryContactNumber")
    public String primaryContactNumber;
    public UserDetailsUpdateRequest withPrimaryContactNumber(String primaryContactNumber) {
        this.primaryContactNumber = primaryContactNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryContactNumber")
    public String secondaryContactNumber;
    public UserDetailsUpdateRequest withSecondaryContactNumber(String secondaryContactNumber) {
        this.secondaryContactNumber = secondaryContactNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smsNumber")
    public String smsNumber;
    public UserDetailsUpdateRequest withSmsNumber(String smsNumber) {
        this.smsNumber = smsNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationCode")
    public String verificationCode;
    public UserDetailsUpdateRequest withVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
        return this;
    }
}