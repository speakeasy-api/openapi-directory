package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MigratingVm
 * MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
**/
public class MigratingVm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsSourceVmDetails")
    public AwsSourceVmDetails awsSourceVmDetails;
    public MigratingVm withAwsSourceVmDetails(AwsSourceVmDetails awsSourceVmDetails) {
        this.awsSourceVmDetails = awsSourceVmDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEngineTargetDefaults")
    public ComputeEngineTargetDefaults computeEngineTargetDefaults;
    public MigratingVm withComputeEngineTargetDefaults(ComputeEngineTargetDefaults computeEngineTargetDefaults) {
        this.computeEngineTargetDefaults = computeEngineTargetDefaults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEngineVmDefaults")
    public TargetVmDetails computeEngineVmDefaults;
    public MigratingVm withComputeEngineVmDefaults(TargetVmDetails computeEngineVmDefaults) {
        this.computeEngineVmDefaults = computeEngineVmDefaults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public MigratingVm withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentSyncInfo")
    public ReplicationCycle currentSyncInfo;
    public MigratingVm withCurrentSyncInfo(ReplicationCycle currentSyncInfo) {
        this.currentSyncInfo = currentSyncInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public MigratingVm withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public MigratingVm withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public MigratingVm withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public String group;
    public MigratingVm withGroup(String group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public MigratingVm withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSync")
    public ReplicationSync lastSync;
    public MigratingVm withLastSync(ReplicationSync lastSync) {
        this.lastSync = lastSync;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MigratingVm withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public SchedulePolicy policy;
    public MigratingVm withPolicy(SchedulePolicy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recentCloneJobs")
    public CloneJob[] recentCloneJobs;
    public MigratingVm withRecentCloneJobs(CloneJob[] recentCloneJobs) {
        this.recentCloneJobs = recentCloneJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recentCutoverJobs")
    public CutoverJob[] recentCutoverJobs;
    public MigratingVm withRecentCutoverJobs(CutoverJob[] recentCutoverJobs) {
        this.recentCutoverJobs = recentCutoverJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceVmId")
    public String sourceVmId;
    public MigratingVm withSourceVmId(String sourceVmId) {
        this.sourceVmId = sourceVmId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public MigratingVmStateEnum state;
    public MigratingVm withState(MigratingVmStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateTime")
    public String stateTime;
    public MigratingVm withStateTime(String stateTime) {
        this.stateTime = stateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDefaults")
    public TargetVmDetails targetDefaults;
    public MigratingVm withTargetDefaults(TargetVmDetails targetDefaults) {
        this.targetDefaults = targetDefaults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public MigratingVm withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}