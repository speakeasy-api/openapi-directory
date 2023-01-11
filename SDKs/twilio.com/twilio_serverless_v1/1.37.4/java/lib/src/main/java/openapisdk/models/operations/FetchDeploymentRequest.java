package openapisdk.models.operations;



public class FetchDeploymentRequest {
    public String serverURL;
    public FetchDeploymentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDeploymentPathParams pathParams;
    public FetchDeploymentRequest withPathParams(FetchDeploymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDeploymentSecurity security;
    public FetchDeploymentRequest withSecurity(FetchDeploymentSecurity security) {
        this.security = security;
        return this;
    }
}