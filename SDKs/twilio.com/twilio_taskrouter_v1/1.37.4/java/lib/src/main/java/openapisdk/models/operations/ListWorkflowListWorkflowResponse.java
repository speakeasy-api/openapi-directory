package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWorkflowListWorkflowResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListWorkflowListWorkflowResponseMeta meta;
    public ListWorkflowListWorkflowResponse withMeta(ListWorkflowListWorkflowResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflows")
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkflow[] workflows;
    public ListWorkflowListWorkflowResponse withWorkflows(openapisdk.models.shared.TaskrouterV1WorkspaceWorkflow[] workflows) {
        this.workflows = workflows;
        return this;
    }
}