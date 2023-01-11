package openapisdk.models.operations;



public class DeleteServiceConversationScopedWebhookRequest {
    public String serverURL;
    public DeleteServiceConversationScopedWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteServiceConversationScopedWebhookPathParams pathParams;
    public DeleteServiceConversationScopedWebhookRequest withPathParams(DeleteServiceConversationScopedWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteServiceConversationScopedWebhookSecurity security;
    public DeleteServiceConversationScopedWebhookRequest withSecurity(DeleteServiceConversationScopedWebhookSecurity security) {
        this.security = security;
        return this;
    }
}