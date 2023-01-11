package openapisdk.models.operations;



public class GetUsersUserIdFollowingsRequest {
    public GetUsersUserIdFollowingsPathParams pathParams;
    public GetUsersUserIdFollowingsRequest withPathParams(GetUsersUserIdFollowingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUsersUserIdFollowingsQueryParams queryParams;
    public GetUsersUserIdFollowingsRequest withQueryParams(GetUsersUserIdFollowingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUsersUserIdFollowingsSecurity security;
    public GetUsersUserIdFollowingsRequest withSecurity(GetUsersUserIdFollowingsSecurity security) {
        this.security = security;
        return this;
    }
}