package openapisdk.models.operations;



public class ListServiceConversationRequest {
    public String serverURL;
    public ListServiceConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListServiceConversationPathParams pathParams;
    public ListServiceConversationRequest withPathParams(ListServiceConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListServiceConversationQueryParams queryParams;
    public ListServiceConversationRequest withQueryParams(ListServiceConversationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceConversationSecurity security;
    public ListServiceConversationRequest withSecurity(ListServiceConversationSecurity security) {
        this.security = security;
        return this;
    }
}