package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommentsPutRequest {
    public CommentsPutPathParams pathParams;
    public CommentsPutRequest withPathParams(CommentsPutPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CommentsPutRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}