package openapisdk.models.operations;



public class EndpointUnfollowPlaylistRequest {
    public EndpointUnfollowPlaylistPathParams pathParams;
    public EndpointUnfollowPlaylistRequest withPathParams(EndpointUnfollowPlaylistPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointUnfollowPlaylistHeaders headers;
    public EndpointUnfollowPlaylistRequest withHeaders(EndpointUnfollowPlaylistHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointUnfollowPlaylistSecurity security;
    public EndpointUnfollowPlaylistRequest withSecurity(EndpointUnfollowPlaylistSecurity security) {
        this.security = security;
        return this;
    }
}