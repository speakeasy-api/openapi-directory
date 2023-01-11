package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserRolePermissionGroupsListResponse
 * User Role Permission Group List Response
**/
public class UserRolePermissionGroupsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public UserRolePermissionGroupsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRolePermissionGroups")
    public UserRolePermissionGroup[] userRolePermissionGroups;
    public UserRolePermissionGroupsListResponse withUserRolePermissionGroups(UserRolePermissionGroup[] userRolePermissionGroups) {
        this.userRolePermissionGroups = userRolePermissionGroups;
        return this;
    }
}