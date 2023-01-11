package openapisdk.models.operations;



public class GetTagsRequest {
    public GetTagsPathParams pathParams;
    public GetTagsRequest withPathParams(GetTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTagsQueryParams queryParams;
    public GetTagsRequest withQueryParams(GetTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTagsHeaders headers;
    public GetTagsRequest withHeaders(GetTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
}