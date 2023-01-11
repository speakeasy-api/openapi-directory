package openapisdk.models.operations;



public class ListAssetRequest {
    public String serverURL;
    public ListAssetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAssetPathParams pathParams;
    public ListAssetRequest withPathParams(ListAssetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAssetQueryParams queryParams;
    public ListAssetRequest withQueryParams(ListAssetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssetSecurity security;
    public ListAssetRequest withSecurity(ListAssetSecurity security) {
        this.security = security;
        return this;
    }
}