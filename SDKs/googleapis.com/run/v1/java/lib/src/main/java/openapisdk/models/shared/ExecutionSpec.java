package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionSpec
 * ExecutionSpec describes how the execution will look.
**/
public class ExecutionSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parallelism")
    public Integer parallelism;
    public ExecutionSpec withParallelism(Integer parallelism) {
        this.parallelism = parallelism;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskCount")
    public Integer taskCount;
    public ExecutionSpec withTaskCount(Integer taskCount) {
        this.taskCount = taskCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public TaskTemplateSpec template;
    public ExecutionSpec withTemplate(TaskTemplateSpec template) {
        this.template = template;
        return this;
    }
}