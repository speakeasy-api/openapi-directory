package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesGetLabelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IssuesGetLabelPathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public IssuesGetLabelPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public IssuesGetLabelPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}