package openapisdk.models.operations;



public class GetRequest {
    public GetQueryParams queryParams;
    public GetRequest withQueryParams(GetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetHeaders headers;
    public GetRequest withHeaders(GetHeaders headers) {
        this.headers = headers;
        return this;
    }
}