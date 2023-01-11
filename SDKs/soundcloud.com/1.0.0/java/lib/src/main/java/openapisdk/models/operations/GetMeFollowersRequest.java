package openapisdk.models.operations;



public class GetMeFollowersRequest {
    public GetMeFollowersQueryParams queryParams;
    public GetMeFollowersRequest withQueryParams(GetMeFollowersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMeFollowersSecurity security;
    public GetMeFollowersRequest withSecurity(GetMeFollowersSecurity security) {
        this.security = security;
        return this;
    }
}