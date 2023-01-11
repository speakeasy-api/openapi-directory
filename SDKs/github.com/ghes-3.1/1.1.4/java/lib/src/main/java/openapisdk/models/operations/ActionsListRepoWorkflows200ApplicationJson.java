package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListRepoWorkflows200ApplicationJson {
    @JsonProperty("total_count")
    public Long totalCount;
    public ActionsListRepoWorkflows200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    @JsonProperty("workflows")
    public openapisdk.models.shared.Workflow[] workflows;
    public ActionsListRepoWorkflows200ApplicationJson withWorkflows(openapisdk.models.shared.Workflow[] workflows) {
        this.workflows = workflows;
        return this;
    }
}