package openapisdk.models.operations;



public class GetAssetRequest {
    public GetAssetPathParams pathParams;
    public GetAssetRequest withPathParams(GetAssetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAssetQueryParams queryParams;
    public GetAssetRequest withQueryParams(GetAssetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAssetSecurity security;
    public GetAssetRequest withSecurity(GetAssetSecurity security) {
        this.security = security;
        return this;
    }
}