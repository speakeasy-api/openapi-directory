package openapisdk.models.operations;



public class GamesScoresGetRequest {
    public GamesScoresGetPathParams pathParams;
    public GamesScoresGetRequest withPathParams(GamesScoresGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesScoresGetQueryParams queryParams;
    public GamesScoresGetRequest withQueryParams(GamesScoresGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesScoresGetSecurity security;
    public GamesScoresGetRequest withSecurity(GamesScoresGetSecurity security) {
        this.security = security;
        return this;
    }
}