package openapisdk.models.operations;



public class GetGenericObjectRequest {
    public GetGenericObjectPathParams pathParams;
    public GetGenericObjectRequest withPathParams(GetGenericObjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetGenericObjectQueryParams queryParams;
    public GetGenericObjectRequest withQueryParams(GetGenericObjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}