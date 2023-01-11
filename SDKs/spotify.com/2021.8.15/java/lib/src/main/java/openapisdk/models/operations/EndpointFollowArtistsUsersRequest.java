package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointFollowArtistsUsersRequest {
    public EndpointFollowArtistsUsersQueryParams queryParams;
    public EndpointFollowArtistsUsersRequest withQueryParams(EndpointFollowArtistsUsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointFollowArtistsUsersHeaders headers;
    public EndpointFollowArtistsUsersRequest withHeaders(EndpointFollowArtistsUsersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointFollowArtistsUsersRequestBody request;
    public EndpointFollowArtistsUsersRequest withRequest(EndpointFollowArtistsUsersRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointFollowArtistsUsersSecurity security;
    public EndpointFollowArtistsUsersRequest withSecurity(EndpointFollowArtistsUsersSecurity security) {
        this.security = security;
        return this;
    }
}