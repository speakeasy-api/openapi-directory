package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatchJob
 * A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use `ListPatchJobInstanceDetails`. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job).
**/
public class PatchJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public PatchJob withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PatchJob withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public PatchJob withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dryRun")
    public Boolean dryRun;
    public PatchJob withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public PatchJob withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public PatchJob withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceDetailsSummary")
    public PatchJobInstanceDetailsSummary instanceDetailsSummary;
    public PatchJob withInstanceDetailsSummary(PatchJobInstanceDetailsSummary instanceDetailsSummary) {
        this.instanceDetailsSummary = instanceDetailsSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceFilter")
    public PatchInstanceFilter instanceFilter;
    public PatchJob withInstanceFilter(PatchInstanceFilter instanceFilter) {
        this.instanceFilter = instanceFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PatchJob withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patchConfig")
    public PatchConfig patchConfig;
    public PatchJob withPatchConfig(PatchConfig patchConfig) {
        this.patchConfig = patchConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patchDeployment")
    public String patchDeployment;
    public PatchJob withPatchDeployment(String patchDeployment) {
        this.patchDeployment = patchDeployment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentComplete")
    public Double percentComplete;
    public PatchJob withPercentComplete(Double percentComplete) {
        this.percentComplete = percentComplete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollout")
    public PatchRollout rollout;
    public PatchJob withRollout(PatchRollout rollout) {
        this.rollout = rollout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public PatchJobStateEnum state;
    public PatchJob withState(PatchJobStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public PatchJob withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}