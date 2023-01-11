package openapisdk.models.operations;



public class GetUvRequest {
    public GetUvQueryParams queryParams;
    public GetUvRequest withQueryParams(GetUvQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUvHeaders headers;
    public GetUvRequest withHeaders(GetUvHeaders headers) {
        this.headers = headers;
        return this;
    }
}