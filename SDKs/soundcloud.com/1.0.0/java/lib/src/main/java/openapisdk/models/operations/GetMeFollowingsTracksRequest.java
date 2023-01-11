package openapisdk.models.operations;



public class GetMeFollowingsTracksRequest {
    public GetMeFollowingsTracksQueryParams queryParams;
    public GetMeFollowingsTracksRequest withQueryParams(GetMeFollowingsTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMeFollowingsTracksSecurity security;
    public GetMeFollowingsTracksRequest withSecurity(GetMeFollowingsTracksSecurity security) {
        this.security = security;
        return this;
    }
}