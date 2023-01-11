package openapisdk.models.operations;



public class FetchServiceUserConversationRequest {
    public String serverURL;
    public FetchServiceUserConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchServiceUserConversationPathParams pathParams;
    public FetchServiceUserConversationRequest withPathParams(FetchServiceUserConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchServiceUserConversationSecurity security;
    public FetchServiceUserConversationRequest withSecurity(FetchServiceUserConversationSecurity security) {
        this.security = security;
        return this;
    }
}