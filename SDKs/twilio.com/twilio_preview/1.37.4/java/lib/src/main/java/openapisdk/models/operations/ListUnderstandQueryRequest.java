package openapisdk.models.operations;



public class ListUnderstandQueryRequest {
    public String serverURL;
    public ListUnderstandQueryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUnderstandQueryPathParams pathParams;
    public ListUnderstandQueryRequest withPathParams(ListUnderstandQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUnderstandQueryQueryParams queryParams;
    public ListUnderstandQueryRequest withQueryParams(ListUnderstandQueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUnderstandQuerySecurity security;
    public ListUnderstandQueryRequest withSecurity(ListUnderstandQuerySecurity security) {
        this.security = security;
        return this;
    }
}