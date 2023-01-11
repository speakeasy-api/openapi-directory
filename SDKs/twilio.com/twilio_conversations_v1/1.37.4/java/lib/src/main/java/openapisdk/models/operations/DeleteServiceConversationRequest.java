package openapisdk.models.operations;



public class DeleteServiceConversationRequest {
    public String serverURL;
    public DeleteServiceConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteServiceConversationPathParams pathParams;
    public DeleteServiceConversationRequest withPathParams(DeleteServiceConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteServiceConversationHeaders headers;
    public DeleteServiceConversationRequest withHeaders(DeleteServiceConversationHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteServiceConversationSecurity security;
    public DeleteServiceConversationRequest withSecurity(DeleteServiceConversationSecurity security) {
        this.security = security;
        return this;
    }
}