package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIamV1TestIamPermissionsRequest
 * Request message for `TestIamPermissions` method.
**/
public class GoogleIamV1TestIamPermissionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String[] permissions;
    public GoogleIamV1TestIamPermissionsRequest withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
}