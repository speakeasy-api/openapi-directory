package openapisdk.models.operations;



public class GetMeFavoritesIdsRequest {
    public GetMeFavoritesIdsQueryParams queryParams;
    public GetMeFavoritesIdsRequest withQueryParams(GetMeFavoritesIdsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMeFavoritesIdsSecurity security;
    public GetMeFavoritesIdsRequest withSecurity(GetMeFavoritesIdsSecurity security) {
        this.security = security;
        return this;
    }
}