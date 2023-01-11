package openapisdk.models.operations;



public class GetMeActivitiesTracksRequest {
    public GetMeActivitiesTracksQueryParams queryParams;
    public GetMeActivitiesTracksRequest withQueryParams(GetMeActivitiesTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMeActivitiesTracksSecurity security;
    public GetMeActivitiesTracksRequest withSecurity(GetMeActivitiesTracksSecurity security) {
        this.security = security;
        return this;
    }
}