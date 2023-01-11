package openapisdk.models.operations;



public class GetEntitiesRequest {
    public GetEntitiesQueryParams queryParams;
    public GetEntitiesRequest withQueryParams(GetEntitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEntitiesHeaders headers;
    public GetEntitiesRequest withHeaders(GetEntitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
}