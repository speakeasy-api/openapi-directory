package openapisdk.models.operations;



public class FetchAssetRequest {
    public String serverURL;
    public FetchAssetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchAssetPathParams pathParams;
    public FetchAssetRequest withPathParams(FetchAssetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchAssetSecurity security;
    public FetchAssetRequest withSecurity(FetchAssetSecurity security) {
        this.security = security;
        return this;
    }
}