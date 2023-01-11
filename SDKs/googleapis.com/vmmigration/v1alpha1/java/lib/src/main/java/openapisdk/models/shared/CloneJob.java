package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloneJob
 * CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.
**/
public class CloneJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEngineTargetDetails")
    public ComputeEngineTargetDetails computeEngineTargetDetails;
    public CloneJob withComputeEngineTargetDetails(ComputeEngineTargetDetails computeEngineTargetDetails) {
        this.computeEngineTargetDetails = computeEngineTargetDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEngineVmDetails")
    public TargetVmDetails computeEngineVmDetails;
    public CloneJob withComputeEngineVmDetails(TargetVmDetails computeEngineVmDetails) {
        this.computeEngineVmDetails = computeEngineVmDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public CloneJob withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public CloneJob withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public CloneJob withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CloneJob withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CloneJobStateEnum state;
    public CloneJob withState(CloneJobStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateTime")
    public String stateTime;
    public CloneJob withStateTime(String stateTime) {
        this.stateTime = stateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public CloneStep[] steps;
    public CloneJob withSteps(CloneStep[] steps) {
        this.steps = steps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDetails")
    public TargetVmDetails targetDetails;
    public CloneJob withTargetDetails(TargetVmDetails targetDetails) {
        this.targetDetails = targetDetails;
        return this;
    }
}