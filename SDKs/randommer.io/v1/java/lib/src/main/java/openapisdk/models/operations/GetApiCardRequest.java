package openapisdk.models.operations;



public class GetApiCardRequest {
    public GetApiCardQueryParams queryParams;
    public GetApiCardRequest withQueryParams(GetApiCardQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetApiCardHeaders headers;
    public GetApiCardRequest withHeaders(GetApiCardHeaders headers) {
        this.headers = headers;
        return this;
    }
}