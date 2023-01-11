package openapisdk.models.operations;



public class GamesStoresListRequest {
    public GamesStoresListPathParams pathParams;
    public GamesStoresListRequest withPathParams(GamesStoresListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesStoresListQueryParams queryParams;
    public GamesStoresListRequest withQueryParams(GamesStoresListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}