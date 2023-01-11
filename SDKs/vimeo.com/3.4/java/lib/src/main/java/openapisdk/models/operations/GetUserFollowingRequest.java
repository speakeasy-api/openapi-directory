package openapisdk.models.operations;



public class GetUserFollowingRequest {
    public GetUserFollowingPathParams pathParams;
    public GetUserFollowingRequest withPathParams(GetUserFollowingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserFollowingQueryParams queryParams;
    public GetUserFollowingRequest withQueryParams(GetUserFollowingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}