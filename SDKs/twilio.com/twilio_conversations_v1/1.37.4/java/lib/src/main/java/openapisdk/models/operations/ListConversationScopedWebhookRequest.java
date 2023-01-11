package openapisdk.models.operations;



public class ListConversationScopedWebhookRequest {
    public String serverURL;
    public ListConversationScopedWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListConversationScopedWebhookPathParams pathParams;
    public ListConversationScopedWebhookRequest withPathParams(ListConversationScopedWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListConversationScopedWebhookQueryParams queryParams;
    public ListConversationScopedWebhookRequest withQueryParams(ListConversationScopedWebhookQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConversationScopedWebhookSecurity security;
    public ListConversationScopedWebhookRequest withSecurity(ListConversationScopedWebhookSecurity security) {
        this.security = security;
        return this;
    }
}