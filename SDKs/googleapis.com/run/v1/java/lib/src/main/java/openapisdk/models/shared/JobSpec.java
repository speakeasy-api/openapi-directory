package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobSpec
 * JobSpec describes how the job will look.
**/
public class JobSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public ExecutionTemplateSpec template;
    public JobSpec withTemplate(ExecutionTemplateSpec template) {
        this.template = template;
        return this;
    }
}