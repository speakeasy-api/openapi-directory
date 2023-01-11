package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoTagsRequest {
    public AddVideoTagsPathParams pathParams;
    public AddVideoTagsRequest withPathParams(AddVideoTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.tag+json")
    public AddVideoTagsRequestBody request;
    public AddVideoTagsRequest withRequest(AddVideoTagsRequestBody request) {
        this.request = request;
        return this;
    }
    public AddVideoTagsSecurity security;
    public AddVideoTagsRequest withSecurity(AddVideoTagsSecurity security) {
        this.security = security;
        return this;
    }
}