package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSaveAlbumsUserRequest {
    public EndpointSaveAlbumsUserQueryParams queryParams;
    public EndpointSaveAlbumsUserRequest withQueryParams(EndpointSaveAlbumsUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointSaveAlbumsUserHeaders headers;
    public EndpointSaveAlbumsUserRequest withHeaders(EndpointSaveAlbumsUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointSaveAlbumsUserRequestBody request;
    public EndpointSaveAlbumsUserRequest withRequest(EndpointSaveAlbumsUserRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointSaveAlbumsUserSecurity security;
    public EndpointSaveAlbumsUserRequest withSecurity(EndpointSaveAlbumsUserSecurity security) {
        this.security = security;
        return this;
    }
}