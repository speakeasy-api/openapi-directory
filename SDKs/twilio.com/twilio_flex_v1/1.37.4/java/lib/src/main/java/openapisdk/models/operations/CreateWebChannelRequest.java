package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebChannelRequest {
    public String serverURL;
    public CreateWebChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateWebChannelCreateWebChannelRequest request;
    public CreateWebChannelRequest withRequest(CreateWebChannelCreateWebChannelRequest request) {
        this.request = request;
        return this;
    }
    public CreateWebChannelSecurity security;
    public CreateWebChannelRequest withSecurity(CreateWebChannelSecurity security) {
        this.security = security;
        return this;
    }
}