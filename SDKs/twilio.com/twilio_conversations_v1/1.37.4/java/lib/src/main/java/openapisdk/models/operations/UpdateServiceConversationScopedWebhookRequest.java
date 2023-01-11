package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceConversationScopedWebhookRequest {
    public String serverURL;
    public UpdateServiceConversationScopedWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateServiceConversationScopedWebhookPathParams pathParams;
    public UpdateServiceConversationScopedWebhookRequest withPathParams(UpdateServiceConversationScopedWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest request;
    public UpdateServiceConversationScopedWebhookRequest withRequest(UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest request) {
        this.request = request;
        return this;
    }
    public UpdateServiceConversationScopedWebhookSecurity security;
    public UpdateServiceConversationScopedWebhookRequest withSecurity(UpdateServiceConversationScopedWebhookSecurity security) {
        this.security = security;
        return this;
    }
}