package openapisdk.models.operations;



public class GetInstanceObjectRequest {
    public GetInstanceObjectPathParams pathParams;
    public GetInstanceObjectRequest withPathParams(GetInstanceObjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetInstanceObjectQueryParams queryParams;
    public GetInstanceObjectRequest withQueryParams(GetInstanceObjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}