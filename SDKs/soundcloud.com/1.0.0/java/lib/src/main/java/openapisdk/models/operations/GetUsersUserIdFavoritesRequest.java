package openapisdk.models.operations;



public class GetUsersUserIdFavoritesRequest {
    public GetUsersUserIdFavoritesPathParams pathParams;
    public GetUsersUserIdFavoritesRequest withPathParams(GetUsersUserIdFavoritesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUsersUserIdFavoritesQueryParams queryParams;
    public GetUsersUserIdFavoritesRequest withQueryParams(GetUsersUserIdFavoritesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUsersUserIdFavoritesSecurity security;
    public GetUsersUserIdFavoritesRequest withSecurity(GetUsersUserIdFavoritesSecurity security) {
        this.security = security;
        return this;
    }
}