package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2ExecutionTemplate
 * ExecutionTemplate describes the data an execution should have when created from a template.
**/
public class GoogleCloudRunV2ExecutionTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public GoogleCloudRunV2ExecutionTemplate withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudRunV2ExecutionTemplate withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parallelism")
    public Integer parallelism;
    public GoogleCloudRunV2ExecutionTemplate withParallelism(Integer parallelism) {
        this.parallelism = parallelism;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskCount")
    public Integer taskCount;
    public GoogleCloudRunV2ExecutionTemplate withTaskCount(Integer taskCount) {
        this.taskCount = taskCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public GoogleCloudRunV2TaskTemplate template;
    public GoogleCloudRunV2ExecutionTemplate withTemplate(GoogleCloudRunV2TaskTemplate template) {
        this.template = template;
        return this;
    }
}