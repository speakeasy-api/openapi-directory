package openapisdk.models.operations;



public class GetFollowersRequest {
    public GetFollowersPathParams pathParams;
    public GetFollowersRequest withPathParams(GetFollowersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFollowersQueryParams queryParams;
    public GetFollowersRequest withQueryParams(GetFollowersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}