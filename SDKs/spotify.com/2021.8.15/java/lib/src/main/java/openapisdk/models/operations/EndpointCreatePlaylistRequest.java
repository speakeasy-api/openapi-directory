package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointCreatePlaylistRequest {
    public EndpointCreatePlaylistPathParams pathParams;
    public EndpointCreatePlaylistRequest withPathParams(EndpointCreatePlaylistPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointCreatePlaylistHeaders headers;
    public EndpointCreatePlaylistRequest withHeaders(EndpointCreatePlaylistHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointCreatePlaylistRequestBody request;
    public EndpointCreatePlaylistRequest withRequest(EndpointCreatePlaylistRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointCreatePlaylistSecurity security;
    public EndpointCreatePlaylistRequest withSecurity(EndpointCreatePlaylistSecurity security) {
        this.security = security;
        return this;
    }
}