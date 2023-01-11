package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitGetTreePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public GitGetTreePathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public GitGetTreePathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tree_sha")
    public String treeSha;
    public GitGetTreePathParams withTreeSha(String treeSha) {
        this.treeSha = treeSha;
        return this;
    }
}