package openapisdk.models.operations;



public class GamesManagementEventsResetAllForAllPlayersRequest {
    public GamesManagementEventsResetAllForAllPlayersQueryParams queryParams;
    public GamesManagementEventsResetAllForAllPlayersRequest withQueryParams(GamesManagementEventsResetAllForAllPlayersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesManagementEventsResetAllForAllPlayersSecurity security;
    public GamesManagementEventsResetAllForAllPlayersRequest withSecurity(GamesManagementEventsResetAllForAllPlayersSecurity security) {
        this.security = security;
        return this;
    }
}