package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideosToChannelRequest {
    public AddVideosToChannelPathParams pathParams;
    public AddVideosToChannelRequest withPathParams(AddVideosToChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddVideosToChannelRequestBody request;
    public AddVideosToChannelRequest withRequest(AddVideosToChannelRequestBody request) {
        this.request = request;
        return this;
    }
    public AddVideosToChannelSecurity security;
    public AddVideosToChannelRequest withSecurity(AddVideosToChannelSecurity security) {
        this.security = security;
        return this;
    }
}