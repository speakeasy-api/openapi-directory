package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListWorkflowRuns200ApplicationJson {
    @JsonProperty("total_count")
    public Long totalCount;
    public ActionsListWorkflowRuns200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    @JsonProperty("workflow_runs")
    public openapisdk.models.shared.WorkflowRun[] workflowRuns;
    public ActionsListWorkflowRuns200ApplicationJson withWorkflowRuns(openapisdk.models.shared.WorkflowRun[] workflowRuns) {
        this.workflowRuns = workflowRuns;
        return this;
    }
}