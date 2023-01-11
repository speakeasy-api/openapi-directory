package openapisdk.models.operations;



public class GamesScoresListRequest {
    public GamesScoresListPathParams pathParams;
    public GamesScoresListRequest withPathParams(GamesScoresListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesScoresListQueryParams queryParams;
    public GamesScoresListRequest withQueryParams(GamesScoresListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesScoresListSecurity security;
    public GamesScoresListRequest withSecurity(GamesScoresListSecurity security) {
        this.security = security;
        return this;
    }
}