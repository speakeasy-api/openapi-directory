package openapisdk.models.operations;



public class GetApiNameRequest {
    public GetApiNameQueryParams queryParams;
    public GetApiNameRequest withQueryParams(GetApiNameQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetApiNameHeaders headers;
    public GetApiNameRequest withHeaders(GetApiNameHeaders headers) {
        this.headers = headers;
        return this;
    }
}