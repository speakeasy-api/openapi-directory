package openapisdk.models.operations;



public class ListMessageRequest {
    public String serverURL;
    public ListMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListMessagePathParams pathParams;
    public ListMessageRequest withPathParams(ListMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListMessageQueryParams queryParams;
    public ListMessageRequest withQueryParams(ListMessageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMessageSecurity security;
    public ListMessageRequest withSecurity(ListMessageSecurity security) {
        this.security = security;
        return this;
    }
}