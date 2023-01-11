package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest
 * Request to disable the Field.
**/
public class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabledPolicy")
    public GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy disabledPolicy;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest withDisabledPolicy(GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy disabledPolicy) {
        this.disabledPolicy = disabledPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}