package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CycleStep
 * CycleStep holds information about a step progress.
**/
public class CycleStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public CycleStep withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initializingReplication")
    public java.util.Map<String, Object> initializingReplication;
    public CycleStep withInitializingReplication(java.util.Map<String, Object> initializingReplication) {
        this.initializingReplication = initializingReplication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postProcessing")
    public java.util.Map<String, Object> postProcessing;
    public CycleStep withPostProcessing(java.util.Map<String, Object> postProcessing) {
        this.postProcessing = postProcessing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicating")
    public ReplicatingStep replicating;
    public CycleStep withReplicating(ReplicatingStep replicating) {
        this.replicating = replicating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public CycleStep withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}