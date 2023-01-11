package openapisdk.models.shared;



/**
 * GoogleIamV1TestIamPermissionsResponse
 * Response message for `TestIamPermissions` method.
**/
public class GoogleIamV1TestIamPermissionsResponse {
    public String[] permissions;
    public GoogleIamV1TestIamPermissionsResponse withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
}