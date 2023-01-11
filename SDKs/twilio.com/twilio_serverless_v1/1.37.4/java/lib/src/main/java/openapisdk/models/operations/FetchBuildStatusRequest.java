package openapisdk.models.operations;



public class FetchBuildStatusRequest {
    public String serverURL;
    public FetchBuildStatusRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchBuildStatusPathParams pathParams;
    public FetchBuildStatusRequest withPathParams(FetchBuildStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchBuildStatusSecurity security;
    public FetchBuildStatusRequest withSecurity(FetchBuildStatusSecurity security) {
        this.security = security;
        return this;
    }
}