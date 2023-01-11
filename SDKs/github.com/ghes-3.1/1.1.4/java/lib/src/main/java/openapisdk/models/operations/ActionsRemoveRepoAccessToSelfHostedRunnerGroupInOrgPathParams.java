package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_id")
    public Long repositoryId;
    public ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams withRepositoryId(Long repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_group_id")
    public Long runnerGroupId;
    public ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams withRunnerGroupId(Long runnerGroupId) {
        this.runnerGroupId = runnerGroupId;
        return this;
    }
}