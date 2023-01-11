package openapisdk.models.operations;



public class ListServiceConversationScopedWebhookRequest {
    public String serverURL;
    public ListServiceConversationScopedWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListServiceConversationScopedWebhookPathParams pathParams;
    public ListServiceConversationScopedWebhookRequest withPathParams(ListServiceConversationScopedWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListServiceConversationScopedWebhookQueryParams queryParams;
    public ListServiceConversationScopedWebhookRequest withQueryParams(ListServiceConversationScopedWebhookQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceConversationScopedWebhookSecurity security;
    public ListServiceConversationScopedWebhookRequest withSecurity(ListServiceConversationScopedWebhookSecurity security) {
        this.security = security;
        return this;
    }
}