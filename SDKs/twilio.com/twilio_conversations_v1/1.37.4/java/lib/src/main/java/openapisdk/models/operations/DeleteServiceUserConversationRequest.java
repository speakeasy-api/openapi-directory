package openapisdk.models.operations;



public class DeleteServiceUserConversationRequest {
    public String serverURL;
    public DeleteServiceUserConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteServiceUserConversationPathParams pathParams;
    public DeleteServiceUserConversationRequest withPathParams(DeleteServiceUserConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteServiceUserConversationSecurity security;
    public DeleteServiceUserConversationRequest withSecurity(DeleteServiceUserConversationSecurity security) {
        this.security = security;
        return this;
    }
}