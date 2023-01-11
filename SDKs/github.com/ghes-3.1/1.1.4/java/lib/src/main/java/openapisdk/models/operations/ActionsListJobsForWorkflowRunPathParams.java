package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsListJobsForWorkflowRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsListJobsForWorkflowRunPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsListJobsForWorkflowRunPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=run_id")
    public Long runId;
    public ActionsListJobsForWorkflowRunPathParams withRunId(Long runId) {
        this.runId = runId;
        return this;
    }
}