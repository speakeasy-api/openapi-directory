package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesCommentCreateRequest {
    public NodesCommentCreatePathParams pathParams;
    public NodesCommentCreateRequest withPathParams(NodesCommentCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NodesCommentCreateCommentInput request;
    public NodesCommentCreateRequest withRequest(NodesCommentCreateCommentInput request) {
        this.request = request;
        return this;
    }
}