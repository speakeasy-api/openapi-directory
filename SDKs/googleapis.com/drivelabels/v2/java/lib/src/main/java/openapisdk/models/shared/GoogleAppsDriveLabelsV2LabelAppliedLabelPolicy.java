package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy
 * Behavior of this label when it's applied to Drive items.
**/
public class GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyMode")
    public GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum copyMode;
    public GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy withCopyMode(GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum copyMode) {
        this.copyMode = copyMode;
        return this;
    }
}