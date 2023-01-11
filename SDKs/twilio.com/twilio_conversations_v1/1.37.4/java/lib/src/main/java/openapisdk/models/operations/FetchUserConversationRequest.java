package openapisdk.models.operations;



public class FetchUserConversationRequest {
    public String serverURL;
    public FetchUserConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUserConversationPathParams pathParams;
    public FetchUserConversationRequest withPathParams(FetchUserConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUserConversationSecurity security;
    public FetchUserConversationRequest withSecurity(FetchUserConversationSecurity security) {
        this.security = security;
        return this;
    }
}