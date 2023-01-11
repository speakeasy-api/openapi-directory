package openapisdk.models.operations;



public class ListConversationRequest {
    public String serverURL;
    public ListConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListConversationQueryParams queryParams;
    public ListConversationRequest withQueryParams(ListConversationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConversationSecurity security;
    public ListConversationRequest withSecurity(ListConversationSecurity security) {
        this.security = security;
        return this;
    }
}