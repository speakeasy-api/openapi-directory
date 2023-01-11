package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorkflow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public CreateWorkflowTemplateEnum template;
    public CreateWorkflow withTemplate(CreateWorkflowTemplateEnum template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflow")
    public Object[] workflow;
    public CreateWorkflow withWorkflow(Object[] workflow) {
        this.workflow = workflow;
        return this;
    }
}