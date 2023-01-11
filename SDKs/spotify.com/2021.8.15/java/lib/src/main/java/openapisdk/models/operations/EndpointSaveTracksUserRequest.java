package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSaveTracksUserRequest {
    public EndpointSaveTracksUserQueryParams queryParams;
    public EndpointSaveTracksUserRequest withQueryParams(EndpointSaveTracksUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointSaveTracksUserHeaders headers;
    public EndpointSaveTracksUserRequest withHeaders(EndpointSaveTracksUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointSaveTracksUserRequestBody request;
    public EndpointSaveTracksUserRequest withRequest(EndpointSaveTracksUserRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointSaveTracksUserSecurity security;
    public EndpointSaveTracksUserRequest withSecurity(EndpointSaveTracksUserSecurity security) {
        this.security = security;
        return this;
    }
}