package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitCommentRequest {
    public SubmitCommentPathParams pathParams;
    public SubmitCommentRequest withPathParams(SubmitCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public SubmitCommentRequestBody request;
    public SubmitCommentRequest withRequest(SubmitCommentRequestBody request) {
        this.request = request;
        return this;
    }
}