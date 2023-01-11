package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointRemoveTracksUserRequest {
    public EndpointRemoveTracksUserQueryParams queryParams;
    public EndpointRemoveTracksUserRequest withQueryParams(EndpointRemoveTracksUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointRemoveTracksUserHeaders headers;
    public EndpointRemoveTracksUserRequest withHeaders(EndpointRemoveTracksUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointRemoveTracksUserRequestBody request;
    public EndpointRemoveTracksUserRequest withRequest(EndpointRemoveTracksUserRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointRemoveTracksUserSecurity security;
    public EndpointRemoveTracksUserRequest withSecurity(EndpointRemoveTracksUserSecurity security) {
        this.security = security;
        return this;
    }
}