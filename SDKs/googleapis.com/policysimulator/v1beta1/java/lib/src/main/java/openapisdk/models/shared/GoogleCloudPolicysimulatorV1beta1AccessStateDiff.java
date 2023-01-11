package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicysimulatorV1beta1AccessStateDiff
 * A summary and comparison of the member's access under the current (baseline) policies and the proposed (simulated) policies for a single access tuple.
**/
public class GoogleCloudPolicysimulatorV1beta1AccessStateDiff {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessChange")
    public GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum accessChange;
    public GoogleCloudPolicysimulatorV1beta1AccessStateDiff withAccessChange(GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum accessChange) {
        this.accessChange = accessChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseline")
    public GoogleCloudPolicysimulatorV1beta1ExplainedAccess baseline;
    public GoogleCloudPolicysimulatorV1beta1AccessStateDiff withBaseline(GoogleCloudPolicysimulatorV1beta1ExplainedAccess baseline) {
        this.baseline = baseline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simulated")
    public GoogleCloudPolicysimulatorV1beta1ExplainedAccess simulated;
    public GoogleCloudPolicysimulatorV1beta1AccessStateDiff withSimulated(GoogleCloudPolicysimulatorV1beta1ExplainedAccess simulated) {
        this.simulated = simulated;
        return this;
    }
}