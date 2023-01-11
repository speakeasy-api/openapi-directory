package openapisdk.models.operations;



public class CollectNowRequest {
    public CollectNowPathParams pathParams;
    public CollectNowRequest withPathParams(CollectNowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CollectNowQueryParams queryParams;
    public CollectNowRequest withQueryParams(CollectNowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}