package openapisdk.models.operations;



public class FetchUnderstandModelBuildRequest {
    public String serverURL;
    public FetchUnderstandModelBuildRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUnderstandModelBuildPathParams pathParams;
    public FetchUnderstandModelBuildRequest withPathParams(FetchUnderstandModelBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUnderstandModelBuildSecurity security;
    public FetchUnderstandModelBuildRequest withSecurity(FetchUnderstandModelBuildSecurity security) {
        this.security = security;
        return this;
    }
}