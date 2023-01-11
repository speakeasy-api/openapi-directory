package openapisdk.models.operations;



public class ListDeploymentRequest {
    public String serverURL;
    public ListDeploymentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListDeploymentPathParams pathParams;
    public ListDeploymentRequest withPathParams(ListDeploymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDeploymentQueryParams queryParams;
    public ListDeploymentRequest withQueryParams(ListDeploymentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeploymentSecurity security;
    public ListDeploymentRequest withSecurity(ListDeploymentSecurity security) {
        this.security = security;
        return this;
    }
}