package openapisdk.models.operations;



public class ListServiceConversationMessageRequest {
    public String serverURL;
    public ListServiceConversationMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListServiceConversationMessagePathParams pathParams;
    public ListServiceConversationMessageRequest withPathParams(ListServiceConversationMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListServiceConversationMessageQueryParams queryParams;
    public ListServiceConversationMessageRequest withQueryParams(ListServiceConversationMessageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceConversationMessageSecurity security;
    public ListServiceConversationMessageRequest withSecurity(ListServiceConversationMessageSecurity security) {
        this.security = security;
        return this;
    }
}