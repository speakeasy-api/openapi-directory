package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsCreateContentAttachmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=content_reference_id")
    public Long contentReferenceId;
    public AppsCreateContentAttachmentPathParams withContentReferenceId(Long contentReferenceId) {
        this.contentReferenceId = contentReferenceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public AppsCreateContentAttachmentPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public AppsCreateContentAttachmentPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}