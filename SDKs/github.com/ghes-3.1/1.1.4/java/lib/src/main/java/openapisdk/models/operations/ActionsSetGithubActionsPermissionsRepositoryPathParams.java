package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsSetGithubActionsPermissionsRepositoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsSetGithubActionsPermissionsRepositoryPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsSetGithubActionsPermissionsRepositoryPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}