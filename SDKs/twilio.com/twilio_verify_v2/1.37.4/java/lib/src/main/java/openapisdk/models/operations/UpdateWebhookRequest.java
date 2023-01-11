package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWebhookRequest {
    public String serverURL;
    public UpdateWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateWebhookPathParams pathParams;
    public UpdateWebhookRequest withPathParams(UpdateWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateWebhookUpdateWebhookRequest request;
    public UpdateWebhookRequest withRequest(UpdateWebhookUpdateWebhookRequest request) {
        this.request = request;
        return this;
    }
    public UpdateWebhookSecurity security;
    public UpdateWebhookRequest withSecurity(UpdateWebhookSecurity security) {
        this.security = security;
        return this;
    }
}