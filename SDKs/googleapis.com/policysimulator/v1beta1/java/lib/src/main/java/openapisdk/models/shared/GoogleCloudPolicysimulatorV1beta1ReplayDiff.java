package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicysimulatorV1beta1ReplayDiff
 * The difference between the results of evaluating an access tuple under the current (baseline) policies and under the proposed (simulated) policies. This difference explains how a member's access could change if the proposed policies were applied.
**/
public class GoogleCloudPolicysimulatorV1beta1ReplayDiff {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessDiff")
    public GoogleCloudPolicysimulatorV1beta1AccessStateDiff accessDiff;
    public GoogleCloudPolicysimulatorV1beta1ReplayDiff withAccessDiff(GoogleCloudPolicysimulatorV1beta1AccessStateDiff accessDiff) {
        this.accessDiff = accessDiff;
        return this;
    }
}