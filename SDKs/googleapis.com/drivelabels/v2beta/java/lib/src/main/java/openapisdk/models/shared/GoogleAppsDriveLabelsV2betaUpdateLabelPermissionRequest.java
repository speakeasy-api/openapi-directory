package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest
 * Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
**/
public class GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelPermission")
    public GoogleAppsDriveLabelsV2betaLabelPermission labelPermission;
    public GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest withLabelPermission(GoogleAppsDriveLabelsV2betaLabelPermission labelPermission) {
        this.labelPermission = labelPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useAdminAccess")
    public Boolean useAdminAccess;
    public GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest withUseAdminAccess(Boolean useAdminAccess) {
        this.useAdminAccess = useAdminAccess;
        return this;
    }
}