package openapisdk.models.operations;



public class EndpointGetPlaylistCoverRequest {
    public EndpointGetPlaylistCoverPathParams pathParams;
    public EndpointGetPlaylistCoverRequest withPathParams(EndpointGetPlaylistCoverPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetPlaylistCoverHeaders headers;
    public EndpointGetPlaylistCoverRequest withHeaders(EndpointGetPlaylistCoverHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetPlaylistCoverSecurity security;
    public EndpointGetPlaylistCoverRequest withSecurity(EndpointGetPlaylistCoverSecurity security) {
        this.security = security;
        return this;
    }
}