package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_id")
    public Long repositoryId;
    public ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams withRepositoryId(Long repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
}