package openapisdk.models.operations;



public class GamesEventsListByPlayerRequest {
    public GamesEventsListByPlayerQueryParams queryParams;
    public GamesEventsListByPlayerRequest withQueryParams(GamesEventsListByPlayerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesEventsListByPlayerSecurity security;
    public GamesEventsListByPlayerRequest withSecurity(GamesEventsListByPlayerSecurity security) {
        this.security = security;
        return this;
    }
}