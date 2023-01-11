package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RoleUpdateRequest {
    @JsonProperty("roles")
    public String[] roles;
    public RoleUpdateRequest withRoles(String[] roles) {
        this.roles = roles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationCode")
    public String verificationCode;
    public RoleUpdateRequest withVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
        return this;
    }
}