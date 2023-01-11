package openapisdk.models.operations;



public class EndpointGetPlaylistsTracksRequest {
    public EndpointGetPlaylistsTracksPathParams pathParams;
    public EndpointGetPlaylistsTracksRequest withPathParams(EndpointGetPlaylistsTracksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetPlaylistsTracksQueryParams queryParams;
    public EndpointGetPlaylistsTracksRequest withQueryParams(EndpointGetPlaylistsTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetPlaylistsTracksHeaders headers;
    public EndpointGetPlaylistsTracksRequest withHeaders(EndpointGetPlaylistsTracksHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetPlaylistsTracksSecurity security;
    public EndpointGetPlaylistsTracksRequest withSecurity(EndpointGetPlaylistsTracksSecurity security) {
        this.security = security;
        return this;
    }
}