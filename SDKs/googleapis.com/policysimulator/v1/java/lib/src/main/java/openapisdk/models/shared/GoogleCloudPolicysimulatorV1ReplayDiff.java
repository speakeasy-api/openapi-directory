package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicysimulatorV1ReplayDiff
 * The difference between the results of evaluating an access tuple under the current (baseline) policies and under the proposed (simulated) policies. This difference explains how a principal's access could change if the proposed policies were applied.
**/
public class GoogleCloudPolicysimulatorV1ReplayDiff {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessDiff")
    public GoogleCloudPolicysimulatorV1AccessStateDiff accessDiff;
    public GoogleCloudPolicysimulatorV1ReplayDiff withAccessDiff(GoogleCloudPolicysimulatorV1AccessStateDiff accessDiff) {
        this.accessDiff = accessDiff;
        return this;
    }
}