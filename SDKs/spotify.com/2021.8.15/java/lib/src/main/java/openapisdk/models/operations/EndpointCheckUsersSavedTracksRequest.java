package openapisdk.models.operations;



public class EndpointCheckUsersSavedTracksRequest {
    public EndpointCheckUsersSavedTracksQueryParams queryParams;
    public EndpointCheckUsersSavedTracksRequest withQueryParams(EndpointCheckUsersSavedTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointCheckUsersSavedTracksHeaders headers;
    public EndpointCheckUsersSavedTracksRequest withHeaders(EndpointCheckUsersSavedTracksHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointCheckUsersSavedTracksSecurity security;
    public EndpointCheckUsersSavedTracksRequest withSecurity(EndpointCheckUsersSavedTracksSecurity security) {
        this.security = security;
        return this;
    }
}