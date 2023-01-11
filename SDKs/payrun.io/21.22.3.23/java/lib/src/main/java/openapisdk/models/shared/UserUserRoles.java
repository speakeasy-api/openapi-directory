package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserUserRoles
 * The users' roles
**/
public class UserUserRoles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Role")
    public String[] role;
    public UserUserRoles withRole(String[] role) {
        this.role = role;
        return this;
    }
}