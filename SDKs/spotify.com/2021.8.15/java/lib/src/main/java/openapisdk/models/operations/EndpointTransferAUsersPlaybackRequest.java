package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointTransferAUsersPlaybackRequest {
    public EndpointTransferAUsersPlaybackHeaders headers;
    public EndpointTransferAUsersPlaybackRequest withHeaders(EndpointTransferAUsersPlaybackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointTransferAUsersPlaybackRequestBody request;
    public EndpointTransferAUsersPlaybackRequest withRequest(EndpointTransferAUsersPlaybackRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointTransferAUsersPlaybackSecurity security;
    public EndpointTransferAUsersPlaybackRequest withSecurity(EndpointTransferAUsersPlaybackSecurity security) {
        this.security = security;
        return this;
    }
}