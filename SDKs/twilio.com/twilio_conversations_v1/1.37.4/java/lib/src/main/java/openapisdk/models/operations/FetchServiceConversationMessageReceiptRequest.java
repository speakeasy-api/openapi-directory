package openapisdk.models.operations;



public class FetchServiceConversationMessageReceiptRequest {
    public String serverURL;
    public FetchServiceConversationMessageReceiptRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchServiceConversationMessageReceiptPathParams pathParams;
    public FetchServiceConversationMessageReceiptRequest withPathParams(FetchServiceConversationMessageReceiptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchServiceConversationMessageReceiptSecurity security;
    public FetchServiceConversationMessageReceiptRequest withSecurity(FetchServiceConversationMessageReceiptSecurity security) {
        this.security = security;
        return this;
    }
}