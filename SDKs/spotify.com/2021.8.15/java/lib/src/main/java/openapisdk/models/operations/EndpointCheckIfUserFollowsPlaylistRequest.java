package openapisdk.models.operations;



public class EndpointCheckIfUserFollowsPlaylistRequest {
    public EndpointCheckIfUserFollowsPlaylistPathParams pathParams;
    public EndpointCheckIfUserFollowsPlaylistRequest withPathParams(EndpointCheckIfUserFollowsPlaylistPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointCheckIfUserFollowsPlaylistQueryParams queryParams;
    public EndpointCheckIfUserFollowsPlaylistRequest withQueryParams(EndpointCheckIfUserFollowsPlaylistQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointCheckIfUserFollowsPlaylistHeaders headers;
    public EndpointCheckIfUserFollowsPlaylistRequest withHeaders(EndpointCheckIfUserFollowsPlaylistHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointCheckIfUserFollowsPlaylistSecurity security;
    public EndpointCheckIfUserFollowsPlaylistRequest withSecurity(EndpointCheckIfUserFollowsPlaylistSecurity security) {
        this.security = security;
        return this;
    }
}