package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig
 * Options related to how clients making requests on behalf of a tenant should be configured.
**/
public class GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public GoogleCloudIdentitytoolkitAdminV2ClientPermissions permissions;
    public GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig withPermissions(GoogleCloudIdentitytoolkitAdminV2ClientPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
}