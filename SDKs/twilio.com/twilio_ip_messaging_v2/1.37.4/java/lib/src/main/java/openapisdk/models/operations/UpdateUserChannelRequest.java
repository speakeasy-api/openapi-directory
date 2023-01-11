package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserChannelRequest {
    public String serverURL;
    public UpdateUserChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateUserChannelPathParams pathParams;
    public UpdateUserChannelRequest withPathParams(UpdateUserChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUserChannelUpdateUserChannelRequest request;
    public UpdateUserChannelRequest withRequest(UpdateUserChannelUpdateUserChannelRequest request) {
        this.request = request;
        return this;
    }
    public UpdateUserChannelSecurity security;
    public UpdateUserChannelRequest withSecurity(UpdateUserChannelSecurity security) {
        this.security = security;
        return this;
    }
}