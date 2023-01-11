package openapisdk.models.operations;



public class GamesAdditionsListRequest {
    public GamesAdditionsListPathParams pathParams;
    public GamesAdditionsListRequest withPathParams(GamesAdditionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesAdditionsListQueryParams queryParams;
    public GamesAdditionsListRequest withQueryParams(GamesAdditionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}