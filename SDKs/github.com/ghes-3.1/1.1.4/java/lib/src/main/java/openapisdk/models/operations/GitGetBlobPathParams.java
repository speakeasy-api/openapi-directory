package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitGetBlobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=file_sha")
    public String fileSha;
    public GitGetBlobPathParams withFileSha(String fileSha) {
        this.fileSha = fileSha;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public GitGetBlobPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public GitGetBlobPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}