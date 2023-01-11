package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutePatchJobRequest
 * A request message to initiate patching across Compute Engine instances.
**/
public class ExecutePatchJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ExecutePatchJobRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ExecutePatchJobRequest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dryRun")
    public Boolean dryRun;
    public ExecutePatchJobRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public ExecutePatchJobRequest withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceFilter")
    public PatchInstanceFilter instanceFilter;
    public ExecutePatchJobRequest withInstanceFilter(PatchInstanceFilter instanceFilter) {
        this.instanceFilter = instanceFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patchConfig")
    public PatchConfig patchConfig;
    public ExecutePatchJobRequest withPatchConfig(PatchConfig patchConfig) {
        this.patchConfig = patchConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollout")
    public PatchRollout rollout;
    public ExecutePatchJobRequest withRollout(PatchRollout rollout) {
        this.rollout = rollout;
        return this;
    }
}