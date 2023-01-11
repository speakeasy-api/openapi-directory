package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CutoverJob
 * CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
**/
public class CutoverJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEngineTargetDetails")
    public ComputeEngineTargetDetails computeEngineTargetDetails;
    public CutoverJob withComputeEngineTargetDetails(ComputeEngineTargetDetails computeEngineTargetDetails) {
        this.computeEngineTargetDetails = computeEngineTargetDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public CutoverJob withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public CutoverJob withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public CutoverJob withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CutoverJob withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progressPercent")
    public Integer progressPercent;
    public CutoverJob withProgressPercent(Integer progressPercent) {
        this.progressPercent = progressPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CutoverJobStateEnum state;
    public CutoverJob withState(CutoverJobStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateMessage")
    public String stateMessage;
    public CutoverJob withStateMessage(String stateMessage) {
        this.stateMessage = stateMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateTime")
    public String stateTime;
    public CutoverJob withStateTime(String stateTime) {
        this.stateTime = stateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public CutoverStep[] steps;
    public CutoverJob withSteps(CutoverStep[] steps) {
        this.steps = steps;
        return this;
    }
}