package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointRemoveEpisodesUserRequest {
    public EndpointRemoveEpisodesUserQueryParams queryParams;
    public EndpointRemoveEpisodesUserRequest withQueryParams(EndpointRemoveEpisodesUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointRemoveEpisodesUserHeaders headers;
    public EndpointRemoveEpisodesUserRequest withHeaders(EndpointRemoveEpisodesUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointRemoveEpisodesUserRequestBody request;
    public EndpointRemoveEpisodesUserRequest withRequest(EndpointRemoveEpisodesUserRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointRemoveEpisodesUserSecurity security;
    public EndpointRemoveEpisodesUserRequest withSecurity(EndpointRemoveEpisodesUserSecurity security) {
        this.security = security;
        return this;
    }
}