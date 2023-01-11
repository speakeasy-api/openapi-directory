package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaPublishLabelRequest
 * Request to publish a label.
**/
public class GoogleAppsDriveLabelsV2betaPublishLabelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleAppsDriveLabelsV2betaPublishLabelRequest withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useAdminAccess")
    public Boolean useAdminAccess;
    public GoogleAppsDriveLabelsV2betaPublishLabelRequest withUseAdminAccess(Boolean useAdminAccess) {
        this.useAdminAccess = useAdminAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("writeControl")
    public GoogleAppsDriveLabelsV2betaWriteControl writeControl;
    public GoogleAppsDriveLabelsV2betaPublishLabelRequest withWriteControl(GoogleAppsDriveLabelsV2betaWriteControl writeControl) {
        this.writeControl = writeControl;
        return this;
    }
}