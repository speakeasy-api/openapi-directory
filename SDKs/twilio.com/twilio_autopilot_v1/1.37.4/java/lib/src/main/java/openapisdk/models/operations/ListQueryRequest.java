package openapisdk.models.operations;



public class ListQueryRequest {
    public String serverURL;
    public ListQueryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListQueryPathParams pathParams;
    public ListQueryRequest withPathParams(ListQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListQueryQueryParams queryParams;
    public ListQueryRequest withQueryParams(ListQueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListQuerySecurity security;
    public ListQueryRequest withSecurity(ListQuerySecurity security) {
        this.security = security;
        return this;
    }
}