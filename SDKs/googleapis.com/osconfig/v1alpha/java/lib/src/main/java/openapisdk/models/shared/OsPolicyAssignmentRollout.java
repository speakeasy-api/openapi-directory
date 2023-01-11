package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyAssignmentRollout
 * Message to configure the rollout at the zonal level for the OS policy assignment.
**/
public class OsPolicyAssignmentRollout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruptionBudget")
    public FixedOrPercent disruptionBudget;
    public OsPolicyAssignmentRollout withDisruptionBudget(FixedOrPercent disruptionBudget) {
        this.disruptionBudget = disruptionBudget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minWaitDuration")
    public String minWaitDuration;
    public OsPolicyAssignmentRollout withMinWaitDuration(String minWaitDuration) {
        this.minWaitDuration = minWaitDuration;
        return this;
    }
}