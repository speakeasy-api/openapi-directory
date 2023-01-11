package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConversationScopedWebhookRequest {
    public String serverURL;
    public CreateConversationScopedWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateConversationScopedWebhookPathParams pathParams;
    public CreateConversationScopedWebhookRequest withPathParams(CreateConversationScopedWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateConversationScopedWebhookCreateConversationScopedWebhookRequest request;
    public CreateConversationScopedWebhookRequest withRequest(CreateConversationScopedWebhookCreateConversationScopedWebhookRequest request) {
        this.request = request;
        return this;
    }
    public CreateConversationScopedWebhookSecurity security;
    public CreateConversationScopedWebhookRequest withSecurity(CreateConversationScopedWebhookSecurity security) {
        this.security = security;
        return this;
    }
}