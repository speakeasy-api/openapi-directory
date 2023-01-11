package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GlobalPermission
 * Global user permission description.
**/
public class GlobalPermission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public GlobalPermissionPermissionEnum permission;
    public GlobalPermission withPermission(GlobalPermissionPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
}