package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatchDeployment
 * Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
**/
public class PatchDeployment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public PatchDeployment withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PatchDeployment withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public PatchDeployment withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceFilter")
    public PatchInstanceFilter instanceFilter;
    public PatchDeployment withInstanceFilter(PatchInstanceFilter instanceFilter) {
        this.instanceFilter = instanceFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastExecuteTime")
    public String lastExecuteTime;
    public PatchDeployment withLastExecuteTime(String lastExecuteTime) {
        this.lastExecuteTime = lastExecuteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PatchDeployment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeSchedule")
    public OneTimeSchedule oneTimeSchedule;
    public PatchDeployment withOneTimeSchedule(OneTimeSchedule oneTimeSchedule) {
        this.oneTimeSchedule = oneTimeSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patchConfig")
    public PatchConfig patchConfig;
    public PatchDeployment withPatchConfig(PatchConfig patchConfig) {
        this.patchConfig = patchConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringSchedule")
    public RecurringSchedule recurringSchedule;
    public PatchDeployment withRecurringSchedule(RecurringSchedule recurringSchedule) {
        this.recurringSchedule = recurringSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollout")
    public PatchRollout rollout;
    public PatchDeployment withRollout(PatchRollout rollout) {
        this.rollout = rollout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public PatchDeploymentStateEnum state;
    public PatchDeployment withState(PatchDeploymentStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public PatchDeployment withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}