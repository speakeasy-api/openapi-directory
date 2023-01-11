package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChannelWebhookRequest {
    public String serverURL;
    public CreateChannelWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateChannelWebhookPathParams pathParams;
    public CreateChannelWebhookRequest withPathParams(CreateChannelWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateChannelWebhookCreateChannelWebhookRequest request;
    public CreateChannelWebhookRequest withRequest(CreateChannelWebhookCreateChannelWebhookRequest request) {
        this.request = request;
        return this;
    }
    public CreateChannelWebhookSecurity security;
    public CreateChannelWebhookRequest withSecurity(CreateChannelWebhookSecurity security) {
        this.security = security;
        return this;
    }
}