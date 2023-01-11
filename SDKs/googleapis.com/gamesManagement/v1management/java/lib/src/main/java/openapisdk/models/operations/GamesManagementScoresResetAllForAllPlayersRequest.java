package openapisdk.models.operations;



public class GamesManagementScoresResetAllForAllPlayersRequest {
    public GamesManagementScoresResetAllForAllPlayersQueryParams queryParams;
    public GamesManagementScoresResetAllForAllPlayersRequest withQueryParams(GamesManagementScoresResetAllForAllPlayersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesManagementScoresResetAllForAllPlayersSecurity security;
    public GamesManagementScoresResetAllForAllPlayersRequest withSecurity(GamesManagementScoresResetAllForAllPlayersSecurity security) {
        this.security = security;
        return this;
    }
}