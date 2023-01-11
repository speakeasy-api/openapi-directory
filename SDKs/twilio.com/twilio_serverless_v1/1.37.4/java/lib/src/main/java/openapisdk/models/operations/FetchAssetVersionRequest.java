package openapisdk.models.operations;



public class FetchAssetVersionRequest {
    public String serverURL;
    public FetchAssetVersionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchAssetVersionPathParams pathParams;
    public FetchAssetVersionRequest withPathParams(FetchAssetVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchAssetVersionSecurity security;
    public FetchAssetVersionRequest withSecurity(FetchAssetVersionSecurity security) {
        this.security = security;
        return this;
    }
}