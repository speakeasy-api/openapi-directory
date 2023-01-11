package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceConversationScopedWebhookRequest {
    public String serverURL;
    public CreateServiceConversationScopedWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateServiceConversationScopedWebhookPathParams pathParams;
    public CreateServiceConversationScopedWebhookRequest withPathParams(CreateServiceConversationScopedWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest request;
    public CreateServiceConversationScopedWebhookRequest withRequest(CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest request) {
        this.request = request;
        return this;
    }
    public CreateServiceConversationScopedWebhookSecurity security;
    public CreateServiceConversationScopedWebhookRequest withSecurity(CreateServiceConversationScopedWebhookSecurity security) {
        this.security = security;
        return this;
    }
}