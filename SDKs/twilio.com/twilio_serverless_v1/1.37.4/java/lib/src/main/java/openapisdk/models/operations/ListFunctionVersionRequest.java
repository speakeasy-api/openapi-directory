package openapisdk.models.operations;



public class ListFunctionVersionRequest {
    public String serverURL;
    public ListFunctionVersionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListFunctionVersionPathParams pathParams;
    public ListFunctionVersionRequest withPathParams(ListFunctionVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListFunctionVersionQueryParams queryParams;
    public ListFunctionVersionRequest withQueryParams(ListFunctionVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFunctionVersionSecurity security;
    public ListFunctionVersionRequest withSecurity(ListFunctionVersionSecurity security) {
        this.security = security;
        return this;
    }
}