package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListLanguagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposListLanguagesPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposListLanguagesPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}