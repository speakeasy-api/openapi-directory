package openapisdk.models.operations;



public class DeleteConversationRequest {
    public String serverURL;
    public DeleteConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteConversationPathParams pathParams;
    public DeleteConversationRequest withPathParams(DeleteConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteConversationHeaders headers;
    public DeleteConversationRequest withHeaders(DeleteConversationHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteConversationSecurity security;
    public DeleteConversationRequest withSecurity(DeleteConversationSecurity security) {
        this.security = security;
        return this;
    }
}