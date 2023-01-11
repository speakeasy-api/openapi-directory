package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaDisableLabelRequest
 * Request to deprecate a published Label.
**/
public class GoogleAppsDriveLabelsV2betaDisableLabelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabledPolicy")
    public GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy disabledPolicy;
    public GoogleAppsDriveLabelsV2betaDisableLabelRequest withDisabledPolicy(GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy disabledPolicy) {
        this.disabledPolicy = disabledPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleAppsDriveLabelsV2betaDisableLabelRequest withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public GoogleAppsDriveLabelsV2betaDisableLabelRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useAdminAccess")
    public Boolean useAdminAccess;
    public GoogleAppsDriveLabelsV2betaDisableLabelRequest withUseAdminAccess(Boolean useAdminAccess) {
        this.useAdminAccess = useAdminAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("writeControl")
    public GoogleAppsDriveLabelsV2betaWriteControl writeControl;
    public GoogleAppsDriveLabelsV2betaDisableLabelRequest withWriteControl(GoogleAppsDriveLabelsV2betaWriteControl writeControl) {
        this.writeControl = writeControl;
        return this;
    }
}