package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CutoverStep
 * CutoverStep holds information about the cutover step progress.
**/
public class CutoverStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public CutoverStep withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalSync")
    public ReplicationCycle finalSync;
    public CutoverStep withFinalSync(ReplicationCycle finalSync) {
        this.finalSync = finalSync;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instantiatingMigratedVm")
    public java.util.Map<String, Object> instantiatingMigratedVm;
    public CutoverStep withInstantiatingMigratedVm(java.util.Map<String, Object> instantiatingMigratedVm) {
        this.instantiatingMigratedVm = instantiatingMigratedVm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preparingVmDisks")
    public java.util.Map<String, Object> preparingVmDisks;
    public CutoverStep withPreparingVmDisks(java.util.Map<String, Object> preparingVmDisks) {
        this.preparingVmDisks = preparingVmDisks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousReplicationCycle")
    public ReplicationCycle previousReplicationCycle;
    public CutoverStep withPreviousReplicationCycle(ReplicationCycle previousReplicationCycle) {
        this.previousReplicationCycle = previousReplicationCycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shuttingDownSourceVm")
    public java.util.Map<String, Object> shuttingDownSourceVm;
    public CutoverStep withShuttingDownSourceVm(java.util.Map<String, Object> shuttingDownSourceVm) {
        this.shuttingDownSourceVm = shuttingDownSourceVm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public CutoverStep withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}