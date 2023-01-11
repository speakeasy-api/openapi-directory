package openapisdk.models.operations;



public class GamesMetagameListCategoriesByPlayerRequest {
    public GamesMetagameListCategoriesByPlayerPathParams pathParams;
    public GamesMetagameListCategoriesByPlayerRequest withPathParams(GamesMetagameListCategoriesByPlayerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesMetagameListCategoriesByPlayerQueryParams queryParams;
    public GamesMetagameListCategoriesByPlayerRequest withQueryParams(GamesMetagameListCategoriesByPlayerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesMetagameListCategoriesByPlayerSecurity security;
    public GamesMetagameListCategoriesByPlayerRequest withSecurity(GamesMetagameListCategoriesByPlayerSecurity security) {
        this.security = security;
        return this;
    }
}