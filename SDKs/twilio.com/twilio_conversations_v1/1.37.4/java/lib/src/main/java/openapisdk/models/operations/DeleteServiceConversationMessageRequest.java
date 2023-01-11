package openapisdk.models.operations;



public class DeleteServiceConversationMessageRequest {
    public String serverURL;
    public DeleteServiceConversationMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteServiceConversationMessagePathParams pathParams;
    public DeleteServiceConversationMessageRequest withPathParams(DeleteServiceConversationMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteServiceConversationMessageHeaders headers;
    public DeleteServiceConversationMessageRequest withHeaders(DeleteServiceConversationMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteServiceConversationMessageSecurity security;
    public DeleteServiceConversationMessageRequest withSecurity(DeleteServiceConversationMessageSecurity security) {
        this.security = security;
        return this;
    }
}