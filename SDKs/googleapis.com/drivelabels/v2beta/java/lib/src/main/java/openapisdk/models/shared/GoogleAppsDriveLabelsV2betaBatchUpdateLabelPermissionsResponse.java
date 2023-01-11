package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse
 * Response for updating one or more Label Permissions.
**/
public class GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public GoogleAppsDriveLabelsV2betaLabelPermission[] permissions;
    public GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse withPermissions(GoogleAppsDriveLabelsV2betaLabelPermission[] permissions) {
        this.permissions = permissions;
        return this;
    }
}