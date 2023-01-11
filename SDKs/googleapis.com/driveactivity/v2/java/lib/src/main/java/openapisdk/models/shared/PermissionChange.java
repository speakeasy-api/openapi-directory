package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PermissionChange
 * A change of the permission setting on an item.
**/
public class PermissionChange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addedPermissions")
    public Permission[] addedPermissions;
    public PermissionChange withAddedPermissions(Permission[] addedPermissions) {
        this.addedPermissions = addedPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removedPermissions")
    public Permission[] removedPermissions;
    public PermissionChange withRemovedPermissions(Permission[] removedPermissions) {
        this.removedPermissions = removedPermissions;
        return this;
    }
}