package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobSpec
 * JobSpec describes how the job execution will look like.
**/
public class JobSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeDeadlineSeconds")
    public String activeDeadlineSeconds;
    public JobSpec withActiveDeadlineSeconds(String activeDeadlineSeconds) {
        this.activeDeadlineSeconds = activeDeadlineSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backoffLimit")
    public Integer backoffLimit;
    public JobSpec withBackoffLimit(Integer backoffLimit) {
        this.backoffLimit = backoffLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completions")
    public Integer completions;
    public JobSpec withCompletions(Integer completions) {
        this.completions = completions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parallelism")
    public Integer parallelism;
    public JobSpec withParallelism(Integer parallelism) {
        this.parallelism = parallelism;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public InstanceTemplateSpec template;
    public JobSpec withTemplate(InstanceTemplateSpec template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttlSecondsAfterFinished")
    public Integer ttlSecondsAfterFinished;
    public JobSpec withTtlSecondsAfterFinished(Integer ttlSecondsAfterFinished) {
        this.ttlSecondsAfterFinished = ttlSecondsAfterFinished;
        return this;
    }
}