package openapisdk.models.operations;



public class DeleteUserConversationRequest {
    public String serverURL;
    public DeleteUserConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUserConversationPathParams pathParams;
    public DeleteUserConversationRequest withPathParams(DeleteUserConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUserConversationSecurity security;
    public DeleteUserConversationRequest withSecurity(DeleteUserConversationSecurity security) {
        this.security = security;
        return this;
    }
}