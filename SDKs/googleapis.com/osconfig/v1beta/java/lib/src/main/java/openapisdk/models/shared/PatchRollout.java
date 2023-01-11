package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatchRollout
 * Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
**/
public class PatchRollout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruptionBudget")
    public FixedOrPercent disruptionBudget;
    public PatchRollout withDisruptionBudget(FixedOrPercent disruptionBudget) {
        this.disruptionBudget = disruptionBudget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public PatchRolloutModeEnum mode;
    public PatchRollout withMode(PatchRolloutModeEnum mode) {
        this.mode = mode;
        return this;
    }
}