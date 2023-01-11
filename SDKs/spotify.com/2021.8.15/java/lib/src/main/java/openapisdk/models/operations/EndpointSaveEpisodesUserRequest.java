package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSaveEpisodesUserRequest {
    public EndpointSaveEpisodesUserQueryParams queryParams;
    public EndpointSaveEpisodesUserRequest withQueryParams(EndpointSaveEpisodesUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointSaveEpisodesUserHeaders headers;
    public EndpointSaveEpisodesUserRequest withHeaders(EndpointSaveEpisodesUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointSaveEpisodesUserRequestBody request;
    public EndpointSaveEpisodesUserRequest withRequest(EndpointSaveEpisodesUserRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointSaveEpisodesUserSecurity security;
    public EndpointSaveEpisodesUserRequest withSecurity(EndpointSaveEpisodesUserSecurity security) {
        this.security = security;
        return this;
    }
}