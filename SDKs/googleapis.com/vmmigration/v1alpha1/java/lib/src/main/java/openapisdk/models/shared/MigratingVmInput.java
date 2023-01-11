package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MigratingVmInput
 * MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
**/
public class MigratingVmInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsSourceVmDetails")
    public AwsSourceVmDetails awsSourceVmDetails;
    public MigratingVmInput withAwsSourceVmDetails(AwsSourceVmDetails awsSourceVmDetails) {
        this.awsSourceVmDetails = awsSourceVmDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEngineTargetDefaults")
    public ComputeEngineTargetDefaultsInput computeEngineTargetDefaults;
    public MigratingVmInput withComputeEngineTargetDefaults(ComputeEngineTargetDefaultsInput computeEngineTargetDefaults) {
        this.computeEngineTargetDefaults = computeEngineTargetDefaults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEngineVmDefaults")
    public TargetVmDetailsInput computeEngineVmDefaults;
    public MigratingVmInput withComputeEngineVmDefaults(TargetVmDetailsInput computeEngineVmDefaults) {
        this.computeEngineVmDefaults = computeEngineVmDefaults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentSyncInfo")
    public ReplicationCycle currentSyncInfo;
    public MigratingVmInput withCurrentSyncInfo(ReplicationCycle currentSyncInfo) {
        this.currentSyncInfo = currentSyncInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public MigratingVmInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public MigratingVmInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public MigratingVmInput withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public MigratingVmInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSync")
    public ReplicationSync lastSync;
    public MigratingVmInput withLastSync(ReplicationSync lastSync) {
        this.lastSync = lastSync;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public SchedulePolicy policy;
    public MigratingVmInput withPolicy(SchedulePolicy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceVmId")
    public String sourceVmId;
    public MigratingVmInput withSourceVmId(String sourceVmId) {
        this.sourceVmId = sourceVmId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDefaults")
    public TargetVmDetailsInput targetDefaults;
    public MigratingVmInput withTargetDefaults(TargetVmDetailsInput targetDefaults) {
        this.targetDefaults = targetDefaults;
        return this;
    }
}