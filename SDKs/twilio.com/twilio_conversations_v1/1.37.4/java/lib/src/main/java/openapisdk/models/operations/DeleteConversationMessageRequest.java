package openapisdk.models.operations;



public class DeleteConversationMessageRequest {
    public String serverURL;
    public DeleteConversationMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteConversationMessagePathParams pathParams;
    public DeleteConversationMessageRequest withPathParams(DeleteConversationMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteConversationMessageHeaders headers;
    public DeleteConversationMessageRequest withHeaders(DeleteConversationMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteConversationMessageSecurity security;
    public DeleteConversationMessageRequest withSecurity(DeleteConversationMessageSecurity security) {
        this.security = security;
        return this;
    }
}