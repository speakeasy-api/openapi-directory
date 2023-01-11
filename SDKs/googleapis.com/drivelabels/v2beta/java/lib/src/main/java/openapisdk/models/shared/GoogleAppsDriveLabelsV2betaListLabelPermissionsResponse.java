package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse
 * Response for listing the permissions on a Label.
**/
public class GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelPermissions")
    public GoogleAppsDriveLabelsV2betaLabelPermission[] labelPermissions;
    public GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse withLabelPermissions(GoogleAppsDriveLabelsV2betaLabelPermission[] labelPermissions) {
        this.labelPermissions = labelPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}