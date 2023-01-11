package openapisdk.models.operations;



public class DeleteUnderstandModelBuildRequest {
    public String serverURL;
    public DeleteUnderstandModelBuildRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUnderstandModelBuildPathParams pathParams;
    public DeleteUnderstandModelBuildRequest withPathParams(DeleteUnderstandModelBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUnderstandModelBuildSecurity security;
    public DeleteUnderstandModelBuildRequest withSecurity(DeleteUnderstandModelBuildSecurity security) {
        this.security = security;
        return this;
    }
}