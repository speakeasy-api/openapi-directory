package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowTemplateInput
 * A Dataproc workflow template resource.
**/
public class WorkflowTemplateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dagTimeout")
    public String dagTimeout;
    public WorkflowTemplateInput withDagTimeout(String dagTimeout) {
        this.dagTimeout = dagTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public WorkflowTemplateInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public OrderedJob[] jobs;
    public WorkflowTemplateInput withJobs(OrderedJob[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public WorkflowTemplateInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public TemplateParameter[] parameters;
    public WorkflowTemplateInput withParameters(TemplateParameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placement")
    public WorkflowTemplatePlacementInput placement;
    public WorkflowTemplateInput withPlacement(WorkflowTemplatePlacementInput placement) {
        this.placement = placement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public WorkflowTemplateInput withVersion(Integer version) {
        this.version = version;
        return this;
    }
}