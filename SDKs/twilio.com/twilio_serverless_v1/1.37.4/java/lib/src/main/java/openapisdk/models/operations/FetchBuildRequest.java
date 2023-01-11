package openapisdk.models.operations;



public class FetchBuildRequest {
    public String serverURL;
    public FetchBuildRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchBuildPathParams pathParams;
    public FetchBuildRequest withPathParams(FetchBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchBuildSecurity security;
    public FetchBuildRequest withSecurity(FetchBuildSecurity security) {
        this.security = security;
        return this;
    }
}