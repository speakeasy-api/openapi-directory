package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityId")
    public String entityId;
    public UserResponse withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public UserResponse withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UserResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public UserResponse withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lockedOut")
    public Boolean lockedOut;
    public UserResponse withLockedOut(Boolean lockedOut) {
        this.lockedOut = lockedOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lockedOutTimestamp")
    public OffsetDateTime lockedOutTimestamp;
    public UserResponse withLockedOutTimestamp(OffsetDateTime lockedOutTimestamp) {
        this.lockedOutTimestamp = lockedOutTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfaStatus")
    public UserResponseMfaStatusEnum mfaStatus;
    public UserResponse withMfaStatus(UserResponseMfaStatusEnum mfaStatus) {
        this.mfaStatus = mfaStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfaType")
    public UserResponseMfaTypeEnum mfaType;
    public UserResponse withMfaType(UserResponseMfaTypeEnum mfaType) {
        this.mfaType = mfaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryContactNumber")
    public String primaryContactNumber;
    public UserResponse withPrimaryContactNumber(String primaryContactNumber) {
        this.primaryContactNumber = primaryContactNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public Role[] roles;
    public UserResponse withRoles(Role[] roles) {
        this.roles = roles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryContactNumber")
    public String secondaryContactNumber;
    public UserResponse withSecondaryContactNumber(String secondaryContactNumber) {
        this.secondaryContactNumber = secondaryContactNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smsNumber")
    public String smsNumber;
    public UserResponse withSmsNumber(String smsNumber) {
        this.smsNumber = smsNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UserResponseStatusEnum status;
    public UserResponse withStatus(UserResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}