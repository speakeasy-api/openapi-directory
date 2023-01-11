package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointRemoveTracksPlaylistRequest {
    public EndpointRemoveTracksPlaylistPathParams pathParams;
    public EndpointRemoveTracksPlaylistRequest withPathParams(EndpointRemoveTracksPlaylistPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointRemoveTracksPlaylistHeaders headers;
    public EndpointRemoveTracksPlaylistRequest withHeaders(EndpointRemoveTracksPlaylistHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointRemoveTracksPlaylistRequestBody request;
    public EndpointRemoveTracksPlaylistRequest withRequest(EndpointRemoveTracksPlaylistRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointRemoveTracksPlaylistSecurity security;
    public EndpointRemoveTracksPlaylistRequest withSecurity(EndpointRemoveTracksPlaylistSecurity security) {
        this.security = security;
        return this;
    }
}