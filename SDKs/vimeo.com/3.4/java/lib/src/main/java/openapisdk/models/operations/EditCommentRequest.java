package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditCommentRequest {
    public EditCommentPathParams pathParams;
    public EditCommentRequest withPathParams(EditCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.comment+json")
    public EditCommentRequestBody request;
    public EditCommentRequest withRequest(EditCommentRequestBody request) {
        this.request = request;
        return this;
    }
    public EditCommentSecurity security;
    public EditCommentRequest withSecurity(EditCommentSecurity security) {
        this.security = security;
        return this;
    }
}