package openapisdk.models.operations;



public class FetchModelBuildRequest {
    public String serverURL;
    public FetchModelBuildRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchModelBuildPathParams pathParams;
    public FetchModelBuildRequest withPathParams(FetchModelBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchModelBuildSecurity security;
    public FetchModelBuildRequest withSecurity(FetchModelBuildSecurity security) {
        this.security = security;
        return this;
    }
}