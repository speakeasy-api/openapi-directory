package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy
 * Behavior of this label when it's applied to Drive items.
**/
public class GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyMode")
    public GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum copyMode;
    public GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy withCopyMode(GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum copyMode) {
        this.copyMode = copyMode;
        return this;
    }
}