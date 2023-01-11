package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest
 * Deletes one of more Label Permissions.
**/
public class GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest[] requests;
    public GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest withRequests(GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest[] requests) {
        this.requests = requests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useAdminAccess")
    public Boolean useAdminAccess;
    public GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest withUseAdminAccess(Boolean useAdminAccess) {
        this.useAdminAccess = useAdminAccess;
        return this;
    }
}