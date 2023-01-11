package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskTemplateSpec
 * TaskTemplateSpec describes the data a task should have when created from a template.
**/
public class TaskTemplateSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public TaskSpec spec;
    public TaskTemplateSpec withSpec(TaskSpec spec) {
        this.spec = spec;
        return this;
    }
}