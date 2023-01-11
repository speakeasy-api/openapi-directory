package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsGetSelfHostedRunnerForRepoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsGetSelfHostedRunnerForRepoPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsGetSelfHostedRunnerForRepoPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_id")
    public Long runnerId;
    public ActionsGetSelfHostedRunnerForRepoPathParams withRunnerId(Long runnerId) {
        this.runnerId = runnerId;
        return this;
    }
}