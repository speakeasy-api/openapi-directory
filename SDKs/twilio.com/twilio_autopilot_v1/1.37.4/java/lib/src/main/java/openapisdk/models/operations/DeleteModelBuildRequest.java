package openapisdk.models.operations;



public class DeleteModelBuildRequest {
    public String serverURL;
    public DeleteModelBuildRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteModelBuildPathParams pathParams;
    public DeleteModelBuildRequest withPathParams(DeleteModelBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteModelBuildSecurity security;
    public DeleteModelBuildRequest withSecurity(DeleteModelBuildSecurity security) {
        this.security = security;
        return this;
    }
}