package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInteractionChannelRequest {
    public String serverURL;
    public UpdateInteractionChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateInteractionChannelPathParams pathParams;
    public UpdateInteractionChannelRequest withPathParams(UpdateInteractionChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateInteractionChannelUpdateInteractionChannelRequest request;
    public UpdateInteractionChannelRequest withRequest(UpdateInteractionChannelUpdateInteractionChannelRequest request) {
        this.request = request;
        return this;
    }
    public UpdateInteractionChannelSecurity security;
    public UpdateInteractionChannelRequest withSecurity(UpdateInteractionChannelSecurity security) {
        this.security = security;
        return this;
    }
}