package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointFollowPlaylistRequest {
    public EndpointFollowPlaylistPathParams pathParams;
    public EndpointFollowPlaylistRequest withPathParams(EndpointFollowPlaylistPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointFollowPlaylistHeaders headers;
    public EndpointFollowPlaylistRequest withHeaders(EndpointFollowPlaylistHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointFollowPlaylistRequestBody request;
    public EndpointFollowPlaylistRequest withRequest(EndpointFollowPlaylistRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointFollowPlaylistSecurity security;
    public EndpointFollowPlaylistRequest withSecurity(EndpointFollowPlaylistSecurity security) {
        this.security = security;
        return this;
    }
}