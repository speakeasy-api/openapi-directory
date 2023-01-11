package openapisdk.models.operations;



public class FetchConversationMessageRequest {
    public String serverURL;
    public FetchConversationMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchConversationMessagePathParams pathParams;
    public FetchConversationMessageRequest withPathParams(FetchConversationMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchConversationMessageSecurity security;
    public FetchConversationMessageRequest withSecurity(FetchConversationMessageSecurity security) {
        this.security = security;
        return this;
    }
}