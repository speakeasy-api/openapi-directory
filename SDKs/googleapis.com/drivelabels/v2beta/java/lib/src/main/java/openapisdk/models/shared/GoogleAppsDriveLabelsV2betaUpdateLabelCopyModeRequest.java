package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest
 * Request to update the `CopyMode` of the given Label. Changes to this policy are not revisioned, do not require publishing, and take effect immediately. \
**/
public class GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyMode")
    public GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum copyMode;
    public GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest withCopyMode(GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum copyMode) {
        this.copyMode = copyMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useAdminAccess")
    public Boolean useAdminAccess;
    public GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest withUseAdminAccess(Boolean useAdminAccess) {
        this.useAdminAccess = useAdminAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum view;
    public GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest withView(GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum view) {
        this.view = view;
        return this;
    }
}