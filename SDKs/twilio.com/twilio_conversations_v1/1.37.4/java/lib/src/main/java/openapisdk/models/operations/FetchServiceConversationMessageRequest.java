package openapisdk.models.operations;



public class FetchServiceConversationMessageRequest {
    public String serverURL;
    public FetchServiceConversationMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchServiceConversationMessagePathParams pathParams;
    public FetchServiceConversationMessageRequest withPathParams(FetchServiceConversationMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchServiceConversationMessageSecurity security;
    public FetchServiceConversationMessageRequest withSecurity(FetchServiceConversationMessageSecurity security) {
        this.security = security;
        return this;
    }
}