package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWebChannelRequest {
    public String serverURL;
    public UpdateWebChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateWebChannelPathParams pathParams;
    public UpdateWebChannelRequest withPathParams(UpdateWebChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateWebChannelUpdateWebChannelRequest request;
    public UpdateWebChannelRequest withRequest(UpdateWebChannelUpdateWebChannelRequest request) {
        this.request = request;
        return this;
    }
    public UpdateWebChannelSecurity security;
    public UpdateWebChannelRequest withSecurity(UpdateWebChannelSecurity security) {
        this.security = security;
        return this;
    }
}