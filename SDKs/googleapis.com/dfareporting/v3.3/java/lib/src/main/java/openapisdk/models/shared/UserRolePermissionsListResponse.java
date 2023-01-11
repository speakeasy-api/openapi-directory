package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserRolePermissionsListResponse
 * User Role Permission List Response
**/
public class UserRolePermissionsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public UserRolePermissionsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRolePermissions")
    public UserRolePermission[] userRolePermissions;
    public UserRolePermissionsListResponse withUserRolePermissions(UserRolePermission[] userRolePermissions) {
        this.userRolePermissions = userRolePermissions;
        return this;
    }
}