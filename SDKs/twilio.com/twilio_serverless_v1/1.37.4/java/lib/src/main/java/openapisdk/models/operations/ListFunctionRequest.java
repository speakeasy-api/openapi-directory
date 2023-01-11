package openapisdk.models.operations;



public class ListFunctionRequest {
    public String serverURL;
    public ListFunctionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListFunctionPathParams pathParams;
    public ListFunctionRequest withPathParams(ListFunctionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListFunctionQueryParams queryParams;
    public ListFunctionRequest withQueryParams(ListFunctionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFunctionSecurity security;
    public ListFunctionRequest withSecurity(ListFunctionSecurity security) {
        this.security = security;
        return this;
    }
}