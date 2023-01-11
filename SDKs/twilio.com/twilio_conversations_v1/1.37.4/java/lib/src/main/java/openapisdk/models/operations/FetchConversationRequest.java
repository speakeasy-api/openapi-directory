package openapisdk.models.operations;



public class FetchConversationRequest {
    public String serverURL;
    public FetchConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchConversationPathParams pathParams;
    public FetchConversationRequest withPathParams(FetchConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchConversationSecurity security;
    public FetchConversationRequest withSecurity(FetchConversationSecurity security) {
        this.security = security;
        return this;
    }
}