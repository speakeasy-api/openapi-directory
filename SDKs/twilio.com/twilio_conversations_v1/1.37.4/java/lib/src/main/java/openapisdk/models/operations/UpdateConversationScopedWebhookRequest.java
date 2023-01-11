package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConversationScopedWebhookRequest {
    public String serverURL;
    public UpdateConversationScopedWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateConversationScopedWebhookPathParams pathParams;
    public UpdateConversationScopedWebhookRequest withPathParams(UpdateConversationScopedWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest request;
    public UpdateConversationScopedWebhookRequest withRequest(UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest request) {
        this.request = request;
        return this;
    }
    public UpdateConversationScopedWebhookSecurity security;
    public UpdateConversationScopedWebhookRequest withSecurity(UpdateConversationScopedWebhookSecurity security) {
        this.security = security;
        return this;
    }
}