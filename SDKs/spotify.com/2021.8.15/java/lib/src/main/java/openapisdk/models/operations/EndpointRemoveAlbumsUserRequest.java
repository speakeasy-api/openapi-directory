package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointRemoveAlbumsUserRequest {
    public EndpointRemoveAlbumsUserQueryParams queryParams;
    public EndpointRemoveAlbumsUserRequest withQueryParams(EndpointRemoveAlbumsUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointRemoveAlbumsUserHeaders headers;
    public EndpointRemoveAlbumsUserRequest withHeaders(EndpointRemoveAlbumsUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointRemoveAlbumsUserRequestBody request;
    public EndpointRemoveAlbumsUserRequest withRequest(EndpointRemoveAlbumsUserRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointRemoveAlbumsUserSecurity security;
    public EndpointRemoveAlbumsUserRequest withSecurity(EndpointRemoveAlbumsUserSecurity security) {
        this.security = security;
        return this;
    }
}