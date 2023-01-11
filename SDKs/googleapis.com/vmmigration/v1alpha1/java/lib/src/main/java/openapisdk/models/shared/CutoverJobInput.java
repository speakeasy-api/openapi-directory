package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CutoverJobInput
 * CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
**/
public class CutoverJobInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEngineTargetDetails")
    public ComputeEngineTargetDetails computeEngineTargetDetails;
    public CutoverJobInput withComputeEngineTargetDetails(ComputeEngineTargetDetails computeEngineTargetDetails) {
        this.computeEngineTargetDetails = computeEngineTargetDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEngineVmDetails")
    public TargetVmDetailsInput computeEngineVmDetails;
    public CutoverJobInput withComputeEngineVmDetails(TargetVmDetailsInput computeEngineVmDetails) {
        this.computeEngineVmDetails = computeEngineVmDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public CutoverJobInput withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDetails")
    public TargetVmDetailsInput targetDetails;
    public CutoverJobInput withTargetDetails(TargetVmDetailsInput targetDetails) {
        this.targetDetails = targetDetails;
        return this;
    }
}