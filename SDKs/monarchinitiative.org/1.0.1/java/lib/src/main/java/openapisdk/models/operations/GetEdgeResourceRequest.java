package openapisdk.models.operations;



public class GetEdgeResourceRequest {
    public GetEdgeResourcePathParams pathParams;
    public GetEdgeResourceRequest withPathParams(GetEdgeResourcePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEdgeResourceQueryParams queryParams;
    public GetEdgeResourceRequest withQueryParams(GetEdgeResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}