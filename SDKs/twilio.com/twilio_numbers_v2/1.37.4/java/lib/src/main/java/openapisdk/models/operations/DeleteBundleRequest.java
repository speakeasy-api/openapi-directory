package openapisdk.models.operations;



public class DeleteBundleRequest {
    public String serverURL;
    public DeleteBundleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteBundlePathParams pathParams;
    public DeleteBundleRequest withPathParams(DeleteBundlePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteBundleSecurity security;
    public DeleteBundleRequest withSecurity(DeleteBundleSecurity security) {
        this.security = security;
        return this;
    }
}