package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChannelWebhookRequest {
    public String serverURL;
    public UpdateChannelWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateChannelWebhookPathParams pathParams;
    public UpdateChannelWebhookRequest withPathParams(UpdateChannelWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateChannelWebhookUpdateChannelWebhookRequest request;
    public UpdateChannelWebhookRequest withRequest(UpdateChannelWebhookUpdateChannelWebhookRequest request) {
        this.request = request;
        return this;
    }
    public UpdateChannelWebhookSecurity security;
    public UpdateChannelWebhookRequest withSecurity(UpdateChannelWebhookSecurity security) {
        this.security = security;
        return this;
    }
}