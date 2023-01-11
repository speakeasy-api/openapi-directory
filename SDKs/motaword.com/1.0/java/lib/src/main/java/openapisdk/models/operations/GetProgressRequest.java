package openapisdk.models.operations;



public class GetProgressRequest {
    public GetProgressPathParams pathParams;
    public GetProgressRequest withPathParams(GetProgressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProgressQueryParams queryParams;
    public GetProgressRequest withQueryParams(GetProgressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}