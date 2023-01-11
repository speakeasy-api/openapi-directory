package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointStartAUsersPlaybackRequest {
    public EndpointStartAUsersPlaybackQueryParams queryParams;
    public EndpointStartAUsersPlaybackRequest withQueryParams(EndpointStartAUsersPlaybackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointStartAUsersPlaybackHeaders headers;
    public EndpointStartAUsersPlaybackRequest withHeaders(EndpointStartAUsersPlaybackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointStartAUsersPlaybackRequestBody request;
    public EndpointStartAUsersPlaybackRequest withRequest(EndpointStartAUsersPlaybackRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointStartAUsersPlaybackSecurity security;
    public EndpointStartAUsersPlaybackRequest withSecurity(EndpointStartAUsersPlaybackSecurity security) {
        this.security = security;
        return this;
    }
}