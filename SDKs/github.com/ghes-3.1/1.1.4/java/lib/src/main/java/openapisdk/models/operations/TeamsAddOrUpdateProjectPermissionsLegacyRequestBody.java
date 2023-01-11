package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsAddOrUpdateProjectPermissionsLegacyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum permission;
    public TeamsAddOrUpdateProjectPermissionsLegacyRequestBody withPermission(TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
}