package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTagsToChannelRequest {
    public AddTagsToChannelPathParams pathParams;
    public AddTagsToChannelRequest withPathParams(AddTagsToChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.tag+json")
    public AddTagsToChannelRequestBody request;
    public AddTagsToChannelRequest withRequest(AddTagsToChannelRequestBody request) {
        this.request = request;
        return this;
    }
    public AddTagsToChannelSecurity security;
    public AddTagsToChannelRequest withSecurity(AddTagsToChannelSecurity security) {
        this.security = security;
        return this;
    }
}