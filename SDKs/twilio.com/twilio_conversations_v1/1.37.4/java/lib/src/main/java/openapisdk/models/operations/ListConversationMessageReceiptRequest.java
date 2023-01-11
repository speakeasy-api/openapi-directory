package openapisdk.models.operations;



public class ListConversationMessageReceiptRequest {
    public String serverURL;
    public ListConversationMessageReceiptRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListConversationMessageReceiptPathParams pathParams;
    public ListConversationMessageReceiptRequest withPathParams(ListConversationMessageReceiptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListConversationMessageReceiptQueryParams queryParams;
    public ListConversationMessageReceiptRequest withQueryParams(ListConversationMessageReceiptQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConversationMessageReceiptSecurity security;
    public ListConversationMessageReceiptRequest withSecurity(ListConversationMessageReceiptSecurity security) {
        this.security = security;
        return this;
    }
}