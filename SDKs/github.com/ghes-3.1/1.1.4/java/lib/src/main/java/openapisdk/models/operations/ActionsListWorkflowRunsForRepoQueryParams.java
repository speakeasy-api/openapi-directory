package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsListWorkflowRunsForRepoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=actor")
    public String actor;
    public ActionsListWorkflowRunsForRepoQueryParams withActor(String actor) {
        this.actor = actor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=branch")
    public String branch;
    public ActionsListWorkflowRunsForRepoQueryParams withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=event")
    public String event;
    public ActionsListWorkflowRunsForRepoQueryParams withEvent(String event) {
        this.event = event;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ActionsListWorkflowRunsForRepoQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ActionsListWorkflowRunsForRepoQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public openapisdk.models.shared.WorkflowRunStatusEnum status;
    public ActionsListWorkflowRunsForRepoQueryParams withStatus(openapisdk.models.shared.WorkflowRunStatusEnum status) {
        this.status = status;
        return this;
    }
}