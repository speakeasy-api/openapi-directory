package openapisdk.models.operations;



public class ListExecutionRequest {
    public String serverURL;
    public ListExecutionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListExecutionPathParams pathParams;
    public ListExecutionRequest withPathParams(ListExecutionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListExecutionQueryParams queryParams;
    public ListExecutionRequest withQueryParams(ListExecutionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListExecutionSecurity security;
    public ListExecutionRequest withSecurity(ListExecutionSecurity security) {
        this.security = security;
        return this;
    }
}