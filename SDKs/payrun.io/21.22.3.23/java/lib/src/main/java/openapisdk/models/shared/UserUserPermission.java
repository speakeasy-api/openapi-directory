package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserUserPermission
 * The users' permissions
**/
public class UserUserPermission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Permission")
    public Object[] permission;
    public UserUserPermission withPermission(Object[] permission) {
        this.permission = permission;
        return this;
    }
}