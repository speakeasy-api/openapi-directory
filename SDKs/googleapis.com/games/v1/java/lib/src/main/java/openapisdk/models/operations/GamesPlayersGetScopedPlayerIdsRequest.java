package openapisdk.models.operations;



public class GamesPlayersGetScopedPlayerIdsRequest {
    public GamesPlayersGetScopedPlayerIdsQueryParams queryParams;
    public GamesPlayersGetScopedPlayerIdsRequest withQueryParams(GamesPlayersGetScopedPlayerIdsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesPlayersGetScopedPlayerIdsSecurity security;
    public GamesPlayersGetScopedPlayerIdsRequest withSecurity(GamesPlayersGetScopedPlayerIdsSecurity security) {
        this.security = security;
        return this;
    }
}