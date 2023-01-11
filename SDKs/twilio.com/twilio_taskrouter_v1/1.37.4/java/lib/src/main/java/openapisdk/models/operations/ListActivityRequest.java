package openapisdk.models.operations;



public class ListActivityRequest {
    public String serverURL;
    public ListActivityRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListActivityPathParams pathParams;
    public ListActivityRequest withPathParams(ListActivityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListActivityQueryParams queryParams;
    public ListActivityRequest withQueryParams(ListActivityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListActivitySecurity security;
    public ListActivityRequest withSecurity(ListActivitySecurity security) {
        this.security = security;
        return this;
    }
}