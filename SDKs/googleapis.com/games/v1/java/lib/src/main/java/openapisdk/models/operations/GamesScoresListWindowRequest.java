package openapisdk.models.operations;



public class GamesScoresListWindowRequest {
    public GamesScoresListWindowPathParams pathParams;
    public GamesScoresListWindowRequest withPathParams(GamesScoresListWindowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesScoresListWindowQueryParams queryParams;
    public GamesScoresListWindowRequest withQueryParams(GamesScoresListWindowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesScoresListWindowSecurity security;
    public GamesScoresListWindowRequest withSecurity(GamesScoresListWindowSecurity security) {
        this.security = security;
        return this;
    }
}