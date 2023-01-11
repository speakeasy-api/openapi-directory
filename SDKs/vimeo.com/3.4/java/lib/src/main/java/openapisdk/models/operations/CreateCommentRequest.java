package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCommentRequest {
    public CreateCommentPathParams pathParams;
    public CreateCommentRequest withPathParams(CreateCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.comment+json")
    public CreateCommentRequestBody request;
    public CreateCommentRequest withRequest(CreateCommentRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateCommentSecurity security;
    public CreateCommentRequest withSecurity(CreateCommentSecurity security) {
        this.security = security;
        return this;
    }
}