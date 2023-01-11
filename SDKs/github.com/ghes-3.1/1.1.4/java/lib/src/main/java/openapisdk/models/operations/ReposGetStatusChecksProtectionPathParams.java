package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetStatusChecksProtectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branch")
    public String branch;
    public ReposGetStatusChecksProtectionPathParams withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposGetStatusChecksProtectionPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposGetStatusChecksProtectionPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}