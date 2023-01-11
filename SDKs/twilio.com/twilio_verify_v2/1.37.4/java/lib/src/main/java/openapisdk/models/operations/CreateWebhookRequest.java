package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebhookRequest {
    public String serverURL;
    public CreateWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateWebhookPathParams pathParams;
    public CreateWebhookRequest withPathParams(CreateWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateWebhookCreateWebhookRequest request;
    public CreateWebhookRequest withRequest(CreateWebhookCreateWebhookRequest request) {
        this.request = request;
        return this;
    }
    public CreateWebhookSecurity security;
    public CreateWebhookRequest withSecurity(CreateWebhookSecurity security) {
        this.security = security;
        return this;
    }
}