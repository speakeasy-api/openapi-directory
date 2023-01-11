package openapisdk.models.operations;



public class GamesLeaderboardsGetRequest {
    public GamesLeaderboardsGetPathParams pathParams;
    public GamesLeaderboardsGetRequest withPathParams(GamesLeaderboardsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesLeaderboardsGetQueryParams queryParams;
    public GamesLeaderboardsGetRequest withQueryParams(GamesLeaderboardsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesLeaderboardsGetSecurity security;
    public GamesLeaderboardsGetRequest withSecurity(GamesLeaderboardsGetSecurity security) {
        this.security = security;
        return this;
    }
}