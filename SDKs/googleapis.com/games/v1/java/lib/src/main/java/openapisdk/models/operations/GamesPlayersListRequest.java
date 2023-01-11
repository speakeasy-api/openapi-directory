package openapisdk.models.operations;



public class GamesPlayersListRequest {
    public GamesPlayersListPathParams pathParams;
    public GamesPlayersListRequest withPathParams(GamesPlayersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesPlayersListQueryParams queryParams;
    public GamesPlayersListRequest withQueryParams(GamesPlayersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesPlayersListSecurity security;
    public GamesPlayersListRequest withSecurity(GamesPlayersListSecurity security) {
        this.security = security;
        return this;
    }
}