package openapisdk.models.operations;



public class ListServiceUserConversationRequest {
    public String serverURL;
    public ListServiceUserConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListServiceUserConversationPathParams pathParams;
    public ListServiceUserConversationRequest withPathParams(ListServiceUserConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListServiceUserConversationQueryParams queryParams;
    public ListServiceUserConversationRequest withQueryParams(ListServiceUserConversationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceUserConversationSecurity security;
    public ListServiceUserConversationRequest withSecurity(ListServiceUserConversationSecurity security) {
        this.security = security;
        return this;
    }
}