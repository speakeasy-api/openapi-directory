package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointRemoveShowsUserRequest {
    public EndpointRemoveShowsUserQueryParams queryParams;
    public EndpointRemoveShowsUserRequest withQueryParams(EndpointRemoveShowsUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointRemoveShowsUserHeaders headers;
    public EndpointRemoveShowsUserRequest withHeaders(EndpointRemoveShowsUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointRemoveShowsUserRequestBody request;
    public EndpointRemoveShowsUserRequest withRequest(EndpointRemoveShowsUserRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointRemoveShowsUserSecurity security;
    public EndpointRemoveShowsUserRequest withSecurity(EndpointRemoveShowsUserSecurity security) {
        this.security = security;
        return this;
    }
}