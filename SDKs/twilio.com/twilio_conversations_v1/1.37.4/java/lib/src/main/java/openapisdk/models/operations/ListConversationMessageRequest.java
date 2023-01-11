package openapisdk.models.operations;



public class ListConversationMessageRequest {
    public String serverURL;
    public ListConversationMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListConversationMessagePathParams pathParams;
    public ListConversationMessageRequest withPathParams(ListConversationMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListConversationMessageQueryParams queryParams;
    public ListConversationMessageRequest withQueryParams(ListConversationMessageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConversationMessageSecurity security;
    public ListConversationMessageRequest withSecurity(ListConversationMessageSecurity security) {
        this.security = security;
        return this;
    }
}