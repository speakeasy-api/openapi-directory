package openapisdk.models.operations;



public class CloudassetAssetsListRequest {
    public CloudassetAssetsListPathParams pathParams;
    public CloudassetAssetsListRequest withPathParams(CloudassetAssetsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudassetAssetsListQueryParams queryParams;
    public CloudassetAssetsListRequest withQueryParams(CloudassetAssetsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudassetAssetsListSecurity security;
    public CloudassetAssetsListRequest withSecurity(CloudassetAssetsListSecurity security) {
        this.security = security;
        return this;
    }
}