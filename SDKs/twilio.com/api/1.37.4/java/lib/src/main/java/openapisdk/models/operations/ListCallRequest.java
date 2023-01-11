package openapisdk.models.operations;



public class ListCallRequest {
    public String serverURL;
    public ListCallRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCallPathParams pathParams;
    public ListCallRequest withPathParams(ListCallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListCallQueryParams queryParams;
    public ListCallRequest withQueryParams(ListCallQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCallSecurity security;
    public ListCallRequest withSecurity(ListCallSecurity security) {
        this.security = security;
        return this;
    }
}