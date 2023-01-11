package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestIamPermissionsRequest
 * Request message for `TestIamPermissions` method.
**/
public class TestIamPermissionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String[] permissions;
    public TestIamPermissionsRequest withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
}