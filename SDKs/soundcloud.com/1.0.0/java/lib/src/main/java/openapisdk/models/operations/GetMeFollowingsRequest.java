package openapisdk.models.operations;



public class GetMeFollowingsRequest {
    public GetMeFollowingsQueryParams queryParams;
    public GetMeFollowingsRequest withQueryParams(GetMeFollowingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMeFollowingsSecurity security;
    public GetMeFollowingsRequest withSecurity(GetMeFollowingsSecurity security) {
        this.security = security;
        return this;
    }
}