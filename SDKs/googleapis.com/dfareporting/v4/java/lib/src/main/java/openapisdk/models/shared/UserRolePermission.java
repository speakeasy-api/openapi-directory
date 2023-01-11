package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserRolePermission
 * Contains properties of a user role permission.
**/
public class UserRolePermission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availability")
    public UserRolePermissionAvailabilityEnum availability;
    public UserRolePermission withAvailability(UserRolePermissionAvailabilityEnum availability) {
        this.availability = availability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UserRolePermission withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public UserRolePermission withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserRolePermission withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionGroupId")
    public String permissionGroupId;
    public UserRolePermission withPermissionGroupId(String permissionGroupId) {
        this.permissionGroupId = permissionGroupId;
        return this;
    }
}