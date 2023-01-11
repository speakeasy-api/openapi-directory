package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatchDeploymentInput
 * Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
**/
public class PatchDeploymentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PatchDeploymentInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public PatchDeploymentInput withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceFilter")
    public PatchInstanceFilter instanceFilter;
    public PatchDeploymentInput withInstanceFilter(PatchInstanceFilter instanceFilter) {
        this.instanceFilter = instanceFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PatchDeploymentInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeSchedule")
    public OneTimeSchedule oneTimeSchedule;
    public PatchDeploymentInput withOneTimeSchedule(OneTimeSchedule oneTimeSchedule) {
        this.oneTimeSchedule = oneTimeSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patchConfig")
    public PatchConfig patchConfig;
    public PatchDeploymentInput withPatchConfig(PatchConfig patchConfig) {
        this.patchConfig = patchConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringSchedule")
    public RecurringScheduleInput recurringSchedule;
    public PatchDeploymentInput withRecurringSchedule(RecurringScheduleInput recurringSchedule) {
        this.recurringSchedule = recurringSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollout")
    public PatchRollout rollout;
    public PatchDeploymentInput withRollout(PatchRollout rollout) {
        this.rollout = rollout;
        return this;
    }
}