package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposDeleteDeployKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key_id")
    public Long keyId;
    public ReposDeleteDeployKeyPathParams withKeyId(Long keyId) {
        this.keyId = keyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposDeleteDeployKeyPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposDeleteDeployKeyPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}