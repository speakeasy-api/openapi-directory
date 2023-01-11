package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthorizationLoggingOptions
 * Authorization-related information used by Cloud Audit Logging.
**/
public class AuthorizationLoggingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionType")
    public AuthorizationLoggingOptionsPermissionTypeEnum permissionType;
    public AuthorizationLoggingOptions withPermissionType(AuthorizationLoggingOptionsPermissionTypeEnum permissionType) {
        this.permissionType = permissionType;
        return this;
    }
}