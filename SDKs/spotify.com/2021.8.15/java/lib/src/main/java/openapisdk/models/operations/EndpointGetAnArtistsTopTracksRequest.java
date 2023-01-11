package openapisdk.models.operations;



public class EndpointGetAnArtistsTopTracksRequest {
    public EndpointGetAnArtistsTopTracksPathParams pathParams;
    public EndpointGetAnArtistsTopTracksRequest withPathParams(EndpointGetAnArtistsTopTracksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetAnArtistsTopTracksQueryParams queryParams;
    public EndpointGetAnArtistsTopTracksRequest withQueryParams(EndpointGetAnArtistsTopTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetAnArtistsTopTracksHeaders headers;
    public EndpointGetAnArtistsTopTracksRequest withHeaders(EndpointGetAnArtistsTopTracksHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetAnArtistsTopTracksSecurity security;
    public EndpointGetAnArtistsTopTracksRequest withSecurity(EndpointGetAnArtistsTopTracksSecurity security) {
        this.security = security;
        return this;
    }
}