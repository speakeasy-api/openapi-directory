package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplicationCycle
 * ReplicationCycle contains information about the current replication cycle status.
**/
public class ReplicationCycle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycleNumber")
    public Integer cycleNumber;
    public ReplicationCycle withCycleNumber(Integer cycleNumber) {
        this.cycleNumber = cycleNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public ReplicationCycle withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public ReplicationCycle withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReplicationCycle withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progressPercent")
    public Integer progressPercent;
    public ReplicationCycle withProgressPercent(Integer progressPercent) {
        this.progressPercent = progressPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public ReplicationCycle withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ReplicationCycleStateEnum state;
    public ReplicationCycle withState(ReplicationCycleStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public CycleStep[] steps;
    public ReplicationCycle withSteps(CycleStep[] steps) {
        this.steps = steps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPauseDuration")
    public String totalPauseDuration;
    public ReplicationCycle withTotalPauseDuration(String totalPauseDuration) {
        this.totalPauseDuration = totalPauseDuration;
        return this;
    }
}