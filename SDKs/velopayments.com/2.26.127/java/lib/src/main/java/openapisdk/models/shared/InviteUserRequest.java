package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InviteUserRequest {
    @JsonProperty("email")
    public String email;
    public InviteUserRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityId")
    public String entityId;
    public InviteUserRequest withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public InviteUserRequest withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public InviteUserRequest withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonProperty("mfaType")
    public InviteUserRequestMfaTypeEnum mfaType;
    public InviteUserRequest withMfaType(InviteUserRequestMfaTypeEnum mfaType) {
        this.mfaType = mfaType;
        return this;
    }
    @JsonProperty("primaryContactNumber")
    public String primaryContactNumber;
    public InviteUserRequest withPrimaryContactNumber(String primaryContactNumber) {
        this.primaryContactNumber = primaryContactNumber;
        return this;
    }
    @JsonProperty("roles")
    public String[] roles;
    public InviteUserRequest withRoles(String[] roles) {
        this.roles = roles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryContactNumber")
    public String secondaryContactNumber;
    public InviteUserRequest withSecondaryContactNumber(String secondaryContactNumber) {
        this.secondaryContactNumber = secondaryContactNumber;
        return this;
    }
    @JsonProperty("smsNumber")
    public String smsNumber;
    public InviteUserRequest withSmsNumber(String smsNumber) {
        this.smsNumber = smsNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationCode")
    public String verificationCode;
    public InviteUserRequest withVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
        return this;
    }
}