package openapisdk.models.operations;



public class GamesScoresSubmitRequest {
    public GamesScoresSubmitPathParams pathParams;
    public GamesScoresSubmitRequest withPathParams(GamesScoresSubmitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesScoresSubmitQueryParams queryParams;
    public GamesScoresSubmitRequest withQueryParams(GamesScoresSubmitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesScoresSubmitSecurity security;
    public GamesScoresSubmitRequest withSecurity(GamesScoresSubmitSecurity security) {
        this.security = security;
        return this;
    }
}