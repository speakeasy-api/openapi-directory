package openapisdk.models.operations;



public class FollowUserRequest {
    public FollowUserPathParams pathParams;
    public FollowUserRequest withPathParams(FollowUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FollowUserSecurity security;
    public FollowUserRequest withSecurity(FollowUserSecurity security) {
        this.security = security;
        return this;
    }
}