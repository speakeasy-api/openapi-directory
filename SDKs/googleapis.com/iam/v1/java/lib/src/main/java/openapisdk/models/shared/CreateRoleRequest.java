package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateRoleRequest
 * The request to create a new role.
**/
public class CreateRoleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public Role role;
    public CreateRoleRequest withRole(Role role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleId")
    public String roleId;
    public CreateRoleRequest withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
}