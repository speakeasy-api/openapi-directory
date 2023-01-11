package openapisdk.models.operations;



public class ListSessionRequest {
    public String serverURL;
    public ListSessionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSessionPathParams pathParams;
    public ListSessionRequest withPathParams(ListSessionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSessionQueryParams queryParams;
    public ListSessionRequest withQueryParams(ListSessionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSessionSecurity security;
    public ListSessionRequest withSecurity(ListSessionSecurity security) {
        this.security = security;
        return this;
    }
}