package openapisdk.models.operations;



public class ListServiceConversationMessageReceiptRequest {
    public String serverURL;
    public ListServiceConversationMessageReceiptRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListServiceConversationMessageReceiptPathParams pathParams;
    public ListServiceConversationMessageReceiptRequest withPathParams(ListServiceConversationMessageReceiptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListServiceConversationMessageReceiptQueryParams queryParams;
    public ListServiceConversationMessageReceiptRequest withQueryParams(ListServiceConversationMessageReceiptQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceConversationMessageReceiptSecurity security;
    public ListServiceConversationMessageReceiptRequest withSecurity(ListServiceConversationMessageReceiptSecurity security) {
        this.security = security;
        return this;
    }
}