package openapisdk.models.operations;



public class ListEnvironmentRequest {
    public String serverURL;
    public ListEnvironmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListEnvironmentPathParams pathParams;
    public ListEnvironmentRequest withPathParams(ListEnvironmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListEnvironmentQueryParams queryParams;
    public ListEnvironmentRequest withQueryParams(ListEnvironmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEnvironmentSecurity security;
    public ListEnvironmentRequest withSecurity(ListEnvironmentSecurity security) {
        this.security = security;
        return this;
    }
}