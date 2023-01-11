package openapisdk.models.operations;



public class GistsListForksRequest {
    public GistsListForksPathParams pathParams;
    public GistsListForksRequest withPathParams(GistsListForksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GistsListForksQueryParams queryParams;
    public GistsListForksRequest withQueryParams(GistsListForksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}