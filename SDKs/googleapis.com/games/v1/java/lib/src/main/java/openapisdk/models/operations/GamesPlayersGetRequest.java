package openapisdk.models.operations;



public class GamesPlayersGetRequest {
    public GamesPlayersGetPathParams pathParams;
    public GamesPlayersGetRequest withPathParams(GamesPlayersGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesPlayersGetQueryParams queryParams;
    public GamesPlayersGetRequest withQueryParams(GamesPlayersGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesPlayersGetSecurity security;
    public GamesPlayersGetRequest withSecurity(GamesPlayersGetSecurity security) {
        this.security = security;
        return this;
    }
}