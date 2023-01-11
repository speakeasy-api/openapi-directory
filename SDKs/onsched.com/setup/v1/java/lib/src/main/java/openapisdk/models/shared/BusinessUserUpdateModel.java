package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BusinessUserUpdateModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public BusinessUserUpdateModel withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BusinessUserUpdateModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public String resourceId;
    public BusinessUserUpdateModel withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public BusinessUserUpdateModel withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sendRegistrationInvite")
    public Boolean sendRegistrationInvite;
    public BusinessUserUpdateModel withSendRegistrationInvite(Boolean sendRegistrationInvite) {
        this.sendRegistrationInvite = sendRegistrationInvite;
        return this;
    }
}