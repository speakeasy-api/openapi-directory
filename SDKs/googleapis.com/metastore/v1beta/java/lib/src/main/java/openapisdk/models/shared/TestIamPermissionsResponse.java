package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestIamPermissionsResponse
 * Response message for TestIamPermissions method.
**/
public class TestIamPermissionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String[] permissions;
    public TestIamPermissionsResponse withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
}