package openapisdk.models.operations;



public class GetSegmentRequest {
    public GetSegmentPathParams pathParams;
    public GetSegmentRequest withPathParams(GetSegmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSegmentQueryParams queryParams;
    public GetSegmentRequest withQueryParams(GetSegmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}