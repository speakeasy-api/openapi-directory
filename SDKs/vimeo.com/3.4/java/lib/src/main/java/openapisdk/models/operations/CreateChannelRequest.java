package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChannelRequest {
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.channel+json")
    public CreateChannelRequestBody request;
    public CreateChannelRequest withRequest(CreateChannelRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateChannelSecurity security;
    public CreateChannelRequest withSecurity(CreateChannelSecurity security) {
        this.security = security;
        return this;
    }
}