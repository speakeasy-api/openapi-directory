package openapisdk.models.operations;



public class GamesManagementPlayersHideRequest {
    public GamesManagementPlayersHidePathParams pathParams;
    public GamesManagementPlayersHideRequest withPathParams(GamesManagementPlayersHidePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesManagementPlayersHideQueryParams queryParams;
    public GamesManagementPlayersHideRequest withQueryParams(GamesManagementPlayersHideQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesManagementPlayersHideSecurity security;
    public GamesManagementPlayersHideRequest withSecurity(GamesManagementPlayersHideSecurity security) {
        this.security = security;
        return this;
    }
}