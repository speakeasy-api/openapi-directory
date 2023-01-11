package openapisdk.models.operations;



public class FetchConversationScopedWebhookRequest {
    public String serverURL;
    public FetchConversationScopedWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchConversationScopedWebhookPathParams pathParams;
    public FetchConversationScopedWebhookRequest withPathParams(FetchConversationScopedWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchConversationScopedWebhookSecurity security;
    public FetchConversationScopedWebhookRequest withSecurity(FetchConversationScopedWebhookSecurity security) {
        this.security = security;
        return this;
    }
}