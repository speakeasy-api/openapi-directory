package openapisdk.models.operations;



public class ListUserConversationRequest {
    public String serverURL;
    public ListUserConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUserConversationPathParams pathParams;
    public ListUserConversationRequest withPathParams(ListUserConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUserConversationQueryParams queryParams;
    public ListUserConversationRequest withQueryParams(ListUserConversationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUserConversationSecurity security;
    public ListUserConversationRequest withSecurity(ListUserConversationSecurity security) {
        this.security = security;
        return this;
    }
}