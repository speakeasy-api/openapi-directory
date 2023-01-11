package openapisdk.models.operations;



public class GetRequest {
    public GetPathParams pathParams;
    public GetRequest withPathParams(GetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetQueryParams queryParams;
    public GetRequest withQueryParams(GetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}