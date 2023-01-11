package openapisdk.models.operations;



public class EndpointGetSeveralTracksRequest {
    public EndpointGetSeveralTracksQueryParams queryParams;
    public EndpointGetSeveralTracksRequest withQueryParams(EndpointGetSeveralTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetSeveralTracksHeaders headers;
    public EndpointGetSeveralTracksRequest withHeaders(EndpointGetSeveralTracksHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetSeveralTracksSecurity security;
    public EndpointGetSeveralTracksRequest withSecurity(EndpointGetSeveralTracksSecurity security) {
        this.security = security;
        return this;
    }
}