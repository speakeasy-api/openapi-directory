package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalTestPermissionsRequest
 * Request message for `TestPermissions` method.
**/
public class SasPortalTestPermissionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String[] permissions;
    public SasPortalTestPermissionsRequest withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public SasPortalTestPermissionsRequest withResource(String resource) {
        this.resource = resource;
        return this;
    }
}