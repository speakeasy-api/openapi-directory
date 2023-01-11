package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalTestPermissionsResponse
 * Response message for `TestPermissions` method.
**/
public class SasPortalTestPermissionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String[] permissions;
    public SasPortalTestPermissionsResponse withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
}