package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput
 * The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied.
**/
public class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput[] requests;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput withRequests(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput[] requests) {
        this.requests = requests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useAdminAccess")
    public Boolean useAdminAccess;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput withUseAdminAccess(Boolean useAdminAccess) {
        this.useAdminAccess = useAdminAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum view;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput withView(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum view) {
        this.view = view;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("writeControl")
    public GoogleAppsDriveLabelsV2betaWriteControl writeControl;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput withWriteControl(GoogleAppsDriveLabelsV2betaWriteControl writeControl) {
        this.writeControl = writeControl;
        return this;
    }
}