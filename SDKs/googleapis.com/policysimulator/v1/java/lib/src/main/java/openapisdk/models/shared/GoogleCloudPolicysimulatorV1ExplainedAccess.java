package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicysimulatorV1ExplainedAccess
 * Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple.
**/
public class GoogleCloudPolicysimulatorV1ExplainedAccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessState")
    public GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum accessState;
    public GoogleCloudPolicysimulatorV1ExplainedAccess withAccessState(GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum accessState) {
        this.accessState = accessState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public GoogleRpcStatus[] errors;
    public GoogleCloudPolicysimulatorV1ExplainedAccess withErrors(GoogleRpcStatus[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policies")
    public GoogleCloudPolicysimulatorV1ExplainedPolicy[] policies;
    public GoogleCloudPolicysimulatorV1ExplainedAccess withPolicies(GoogleCloudPolicysimulatorV1ExplainedPolicy[] policies) {
        this.policies = policies;
        return this;
    }
}