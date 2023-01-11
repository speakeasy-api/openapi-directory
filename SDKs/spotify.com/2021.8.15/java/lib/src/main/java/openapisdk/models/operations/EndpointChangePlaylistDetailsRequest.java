package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointChangePlaylistDetailsRequest {
    public EndpointChangePlaylistDetailsPathParams pathParams;
    public EndpointChangePlaylistDetailsRequest withPathParams(EndpointChangePlaylistDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointChangePlaylistDetailsHeaders headers;
    public EndpointChangePlaylistDetailsRequest withHeaders(EndpointChangePlaylistDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointChangePlaylistDetailsRequestBody request;
    public EndpointChangePlaylistDetailsRequest withRequest(EndpointChangePlaylistDetailsRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointChangePlaylistDetailsSecurity security;
    public EndpointChangePlaylistDetailsRequest withSecurity(EndpointChangePlaylistDetailsSecurity security) {
        this.security = security;
        return this;
    }
}