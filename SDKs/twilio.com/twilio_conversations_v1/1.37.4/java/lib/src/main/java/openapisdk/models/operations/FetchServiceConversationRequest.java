package openapisdk.models.operations;



public class FetchServiceConversationRequest {
    public String serverURL;
    public FetchServiceConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchServiceConversationPathParams pathParams;
    public FetchServiceConversationRequest withPathParams(FetchServiceConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchServiceConversationSecurity security;
    public FetchServiceConversationRequest withSecurity(FetchServiceConversationSecurity security) {
        this.security = security;
        return this;
    }
}