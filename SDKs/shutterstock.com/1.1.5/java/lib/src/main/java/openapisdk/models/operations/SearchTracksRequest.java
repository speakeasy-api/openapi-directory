package openapisdk.models.operations;



public class SearchTracksRequest {
    public SearchTracksQueryParams queryParams;
    public SearchTracksRequest withQueryParams(SearchTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchTracksSecurity security;
    public SearchTracksRequest withSecurity(SearchTracksSecurity security) {
        this.security = security;
        return this;
    }
}