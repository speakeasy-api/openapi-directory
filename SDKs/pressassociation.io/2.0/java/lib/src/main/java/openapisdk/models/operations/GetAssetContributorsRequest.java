package openapisdk.models.operations;



public class GetAssetContributorsRequest {
    public GetAssetContributorsPathParams pathParams;
    public GetAssetContributorsRequest withPathParams(GetAssetContributorsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAssetContributorsQueryParams queryParams;
    public GetAssetContributorsRequest withQueryParams(GetAssetContributorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAssetContributorsSecurity security;
    public GetAssetContributorsRequest withSecurity(GetAssetContributorsSecurity security) {
        this.security = security;
        return this;
    }
}