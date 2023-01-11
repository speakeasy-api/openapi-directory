package openapisdk.models.operations;



public class DeleteBuildRequest {
    public String serverURL;
    public DeleteBuildRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteBuildPathParams pathParams;
    public DeleteBuildRequest withPathParams(DeleteBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteBuildSecurity security;
    public DeleteBuildRequest withSecurity(DeleteBuildSecurity security) {
        this.security = security;
        return this;
    }
}