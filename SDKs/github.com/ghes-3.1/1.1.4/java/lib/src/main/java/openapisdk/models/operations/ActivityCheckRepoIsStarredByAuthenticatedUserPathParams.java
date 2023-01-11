package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityCheckRepoIsStarredByAuthenticatedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActivityCheckRepoIsStarredByAuthenticatedUserPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActivityCheckRepoIsStarredByAuthenticatedUserPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}