package openapisdk.models.operations;



public class GetUsersUserIdFollowersRequest {
    public GetUsersUserIdFollowersPathParams pathParams;
    public GetUsersUserIdFollowersRequest withPathParams(GetUsersUserIdFollowersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUsersUserIdFollowersQueryParams queryParams;
    public GetUsersUserIdFollowersRequest withQueryParams(GetUsersUserIdFollowersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUsersUserIdFollowersSecurity security;
    public GetUsersUserIdFollowersRequest withSecurity(GetUsersUserIdFollowersSecurity security) {
        this.security = security;
        return this;
    }
}