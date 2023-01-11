package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoCreditAlt1Request {
    public AddVideoCreditAlt1PathParams pathParams;
    public AddVideoCreditAlt1Request withPathParams(AddVideoCreditAlt1PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.credit+json")
    public AddVideoCreditAlt1RequestBody request;
    public AddVideoCreditAlt1Request withRequest(AddVideoCreditAlt1RequestBody request) {
        this.request = request;
        return this;
    }
}