package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoCreditRequest {
    public AddVideoCreditPathParams pathParams;
    public AddVideoCreditRequest withPathParams(AddVideoCreditPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.credit+json")
    public AddVideoCreditRequestBody request;
    public AddVideoCreditRequest withRequest(AddVideoCreditRequestBody request) {
        this.request = request;
        return this;
    }
}