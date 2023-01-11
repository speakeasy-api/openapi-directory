package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicysimulatorV1AccessStateDiff
 * A summary and comparison of the principal's access under the current (baseline) policies and the proposed (simulated) policies for a single access tuple.
**/
public class GoogleCloudPolicysimulatorV1AccessStateDiff {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessChange")
    public GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum accessChange;
    public GoogleCloudPolicysimulatorV1AccessStateDiff withAccessChange(GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum accessChange) {
        this.accessChange = accessChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseline")
    public GoogleCloudPolicysimulatorV1ExplainedAccess baseline;
    public GoogleCloudPolicysimulatorV1AccessStateDiff withBaseline(GoogleCloudPolicysimulatorV1ExplainedAccess baseline) {
        this.baseline = baseline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simulated")
    public GoogleCloudPolicysimulatorV1ExplainedAccess simulated;
    public GoogleCloudPolicysimulatorV1AccessStateDiff withSimulated(GoogleCloudPolicysimulatorV1ExplainedAccess simulated) {
        this.simulated = simulated;
        return this;
    }
}