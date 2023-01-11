package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_id")
    public Long repositoryId;
    public ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams withRepositoryId(Long repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_group_id")
    public Long runnerGroupId;
    public ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams withRunnerGroupId(Long runnerGroupId) {
        this.runnerGroupId = runnerGroupId;
        return this;
    }
}