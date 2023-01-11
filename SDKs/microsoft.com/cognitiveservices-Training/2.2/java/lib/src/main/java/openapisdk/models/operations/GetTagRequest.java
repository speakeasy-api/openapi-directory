package openapisdk.models.operations;



public class GetTagRequest {
    public GetTagPathParams pathParams;
    public GetTagRequest withPathParams(GetTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTagQueryParams queryParams;
    public GetTagRequest withQueryParams(GetTagQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTagHeaders headers;
    public GetTagRequest withHeaders(GetTagHeaders headers) {
        this.headers = headers;
        return this;
    }
}