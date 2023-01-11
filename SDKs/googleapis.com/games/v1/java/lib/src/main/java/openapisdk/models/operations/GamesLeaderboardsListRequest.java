package openapisdk.models.operations;



public class GamesLeaderboardsListRequest {
    public GamesLeaderboardsListQueryParams queryParams;
    public GamesLeaderboardsListRequest withQueryParams(GamesLeaderboardsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesLeaderboardsListSecurity security;
    public GamesLeaderboardsListRequest withSecurity(GamesLeaderboardsListSecurity security) {
        this.security = security;
        return this;
    }
}