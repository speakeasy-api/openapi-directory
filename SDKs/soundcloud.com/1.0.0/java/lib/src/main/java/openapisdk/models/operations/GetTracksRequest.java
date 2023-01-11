package openapisdk.models.operations;



public class GetTracksRequest {
    public GetTracksQueryParams queryParams;
    public GetTracksRequest withQueryParams(GetTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTracksSecurity security;
    public GetTracksRequest withSecurity(GetTracksSecurity security) {
        this.security = security;
        return this;
    }
}