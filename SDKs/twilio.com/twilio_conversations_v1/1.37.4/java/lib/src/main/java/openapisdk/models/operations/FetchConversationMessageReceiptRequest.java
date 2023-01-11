package openapisdk.models.operations;



public class FetchConversationMessageReceiptRequest {
    public String serverURL;
    public FetchConversationMessageReceiptRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchConversationMessageReceiptPathParams pathParams;
    public FetchConversationMessageReceiptRequest withPathParams(FetchConversationMessageReceiptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchConversationMessageReceiptSecurity security;
    public FetchConversationMessageReceiptRequest withSecurity(FetchConversationMessageReceiptSecurity security) {
        this.security = security;
        return this;
    }
}