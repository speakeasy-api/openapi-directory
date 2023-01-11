package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointAddTracksToPlaylistRequest {
    public EndpointAddTracksToPlaylistPathParams pathParams;
    public EndpointAddTracksToPlaylistRequest withPathParams(EndpointAddTracksToPlaylistPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointAddTracksToPlaylistQueryParams queryParams;
    public EndpointAddTracksToPlaylistRequest withQueryParams(EndpointAddTracksToPlaylistQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointAddTracksToPlaylistHeaders headers;
    public EndpointAddTracksToPlaylistRequest withHeaders(EndpointAddTracksToPlaylistHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointAddTracksToPlaylistRequestBody request;
    public EndpointAddTracksToPlaylistRequest withRequest(EndpointAddTracksToPlaylistRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointAddTracksToPlaylistSecurity security;
    public EndpointAddTracksToPlaylistRequest withSecurity(EndpointAddTracksToPlaylistSecurity security) {
        this.security = security;
        return this;
    }
}