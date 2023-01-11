package openapisdk.models.operations;



public class DeleteEnvironmentRequest {
    public String serverURL;
    public DeleteEnvironmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteEnvironmentPathParams pathParams;
    public DeleteEnvironmentRequest withPathParams(DeleteEnvironmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteEnvironmentSecurity security;
    public DeleteEnvironmentRequest withSecurity(DeleteEnvironmentSecurity security) {
        this.security = security;
        return this;
    }
}