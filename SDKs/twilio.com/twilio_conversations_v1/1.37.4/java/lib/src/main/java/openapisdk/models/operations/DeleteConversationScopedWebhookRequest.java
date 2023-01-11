package openapisdk.models.operations;



public class DeleteConversationScopedWebhookRequest {
    public String serverURL;
    public DeleteConversationScopedWebhookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteConversationScopedWebhookPathParams pathParams;
    public DeleteConversationScopedWebhookRequest withPathParams(DeleteConversationScopedWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteConversationScopedWebhookSecurity security;
    public DeleteConversationScopedWebhookRequest withSecurity(DeleteConversationScopedWebhookSecurity security) {
        this.security = security;
        return this;
    }
}