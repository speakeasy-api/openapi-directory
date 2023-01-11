package openapisdk.models.operations;



public class FetchServiceConversationScopedWebhookRequest {
    public String serverURL;
    public FetchServiceConversationScopedWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchServiceConversationScopedWebhookPathParams pathParams;
    public FetchServiceConversationScopedWebhookRequest withPathParams(FetchServiceConversationScopedWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchServiceConversationScopedWebhookSecurity security;
    public FetchServiceConversationScopedWebhookRequest withSecurity(FetchServiceConversationScopedWebhookSecurity security) {
        this.security = security;
        return this;
    }
}