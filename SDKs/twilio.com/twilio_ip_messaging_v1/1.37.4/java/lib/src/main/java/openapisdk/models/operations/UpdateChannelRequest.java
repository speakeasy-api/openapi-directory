package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChannelRequest {
    public String serverURL;
    public UpdateChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateChannelPathParams pathParams;
    public UpdateChannelRequest withPathParams(UpdateChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateChannelUpdateChannelRequest request;
    public UpdateChannelRequest withRequest(UpdateChannelUpdateChannelRequest request) {
        this.request = request;
        return this;
    }
    public UpdateChannelSecurity security;
    public UpdateChannelRequest withSecurity(UpdateChannelSecurity security) {
        this.security = security;
        return this;
    }
}