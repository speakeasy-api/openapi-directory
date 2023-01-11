package openapisdk.models.operations;



public class GetLikesRequest {
    public GetLikesPathParams pathParams;
    public GetLikesRequest withPathParams(GetLikesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLikesQueryParams queryParams;
    public GetLikesRequest withQueryParams(GetLikesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}