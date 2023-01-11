package openapisdk.models.operations;



public class EndpointGetUsersSavedTracksRequest {
    public EndpointGetUsersSavedTracksQueryParams queryParams;
    public EndpointGetUsersSavedTracksRequest withQueryParams(EndpointGetUsersSavedTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetUsersSavedTracksHeaders headers;
    public EndpointGetUsersSavedTracksRequest withHeaders(EndpointGetUsersSavedTracksHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetUsersSavedTracksSecurity security;
    public EndpointGetUsersSavedTracksRequest withSecurity(EndpointGetUsersSavedTracksSecurity security) {
        this.security = security;
        return this;
    }
}