package openapisdk.models.operations;



public class ListAssetVersionRequest {
    public String serverURL;
    public ListAssetVersionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAssetVersionPathParams pathParams;
    public ListAssetVersionRequest withPathParams(ListAssetVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAssetVersionQueryParams queryParams;
    public ListAssetVersionRequest withQueryParams(ListAssetVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssetVersionSecurity security;
    public ListAssetVersionRequest withSecurity(ListAssetVersionSecurity security) {
        this.security = security;
        return this;
    }
}