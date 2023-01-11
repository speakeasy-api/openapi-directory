package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayTestIamPermissionsResponse
 * Response message for `TestIamPermissions` method.
**/
public class ApigatewayTestIamPermissionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String[] permissions;
    public ApigatewayTestIamPermissionsResponse withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
}