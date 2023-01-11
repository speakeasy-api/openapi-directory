package openapisdk.models.operations;



public class GetMeTracksRequest {
    public GetMeTracksQueryParams queryParams;
    public GetMeTracksRequest withQueryParams(GetMeTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMeTracksSecurity security;
    public GetMeTracksRequest withSecurity(GetMeTracksSecurity security) {
        this.security = security;
        return this;
    }
}