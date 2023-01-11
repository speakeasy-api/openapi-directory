package openapisdk.models.operations;



public class FetchBundleRequest {
    public String serverURL;
    public FetchBundleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchBundlePathParams pathParams;
    public FetchBundleRequest withPathParams(FetchBundlePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchBundleSecurity security;
    public FetchBundleRequest withSecurity(FetchBundleSecurity security) {
        this.security = security;
        return this;
    }
}