package openapisdk.models.operations;



public class GetMapRequest {
    public GetMapPathParams pathParams;
    public GetMapRequest withPathParams(GetMapPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetMapQueryParams queryParams;
    public GetMapRequest withQueryParams(GetMapQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}