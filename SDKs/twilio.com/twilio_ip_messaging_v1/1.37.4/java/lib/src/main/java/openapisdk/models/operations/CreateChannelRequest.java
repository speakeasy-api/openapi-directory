package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChannelRequest {
    public String serverURL;
    public CreateChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateChannelPathParams pathParams;
    public CreateChannelRequest withPathParams(CreateChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateChannelCreateChannelRequest request;
    public CreateChannelRequest withRequest(CreateChannelCreateChannelRequest request) {
        this.request = request;
        return this;
    }
    public CreateChannelSecurity security;
    public CreateChannelRequest withSecurity(CreateChannelSecurity security) {
        this.security = security;
        return this;
    }
}