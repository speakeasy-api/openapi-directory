package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest
 * Updates one or more Label Permissions.
**/
public class GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest[] requests;
    public GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest withRequests(GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest[] requests) {
        this.requests = requests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useAdminAccess")
    public Boolean useAdminAccess;
    public GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest withUseAdminAccess(Boolean useAdminAccess) {
        this.useAdminAccess = useAdminAccess;
        return this;
    }
}