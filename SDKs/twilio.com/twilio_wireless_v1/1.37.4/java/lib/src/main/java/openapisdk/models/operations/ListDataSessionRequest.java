package openapisdk.models.operations;



public class ListDataSessionRequest {
    public String serverURL;
    public ListDataSessionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListDataSessionPathParams pathParams;
    public ListDataSessionRequest withPathParams(ListDataSessionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDataSessionQueryParams queryParams;
    public ListDataSessionRequest withQueryParams(ListDataSessionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDataSessionSecurity security;
    public ListDataSessionRequest withSecurity(ListDataSessionSecurity security) {
        this.security = security;
        return this;
    }
}