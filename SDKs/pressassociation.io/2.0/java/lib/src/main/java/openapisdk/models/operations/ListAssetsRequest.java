package openapisdk.models.operations;



public class ListAssetsRequest {
    public ListAssetsQueryParams queryParams;
    public ListAssetsRequest withQueryParams(ListAssetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssetsSecurity security;
    public ListAssetsRequest withSecurity(ListAssetsSecurity security) {
        this.security = security;
        return this;
    }
}