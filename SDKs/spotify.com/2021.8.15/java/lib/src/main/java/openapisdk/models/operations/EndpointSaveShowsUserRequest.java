package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSaveShowsUserRequest {
    public EndpointSaveShowsUserQueryParams queryParams;
    public EndpointSaveShowsUserRequest withQueryParams(EndpointSaveShowsUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointSaveShowsUserHeaders headers;
    public EndpointSaveShowsUserRequest withHeaders(EndpointSaveShowsUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointSaveShowsUserRequestBody request;
    public EndpointSaveShowsUserRequest withRequest(EndpointSaveShowsUserRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointSaveShowsUserSecurity security;
    public EndpointSaveShowsUserRequest withSecurity(EndpointSaveShowsUserSecurity security) {
        this.security = security;
        return this;
    }
}