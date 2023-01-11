package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointUnfollowArtistsUsersRequest {
    public EndpointUnfollowArtistsUsersQueryParams queryParams;
    public EndpointUnfollowArtistsUsersRequest withQueryParams(EndpointUnfollowArtistsUsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointUnfollowArtistsUsersHeaders headers;
    public EndpointUnfollowArtistsUsersRequest withHeaders(EndpointUnfollowArtistsUsersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointUnfollowArtistsUsersRequestBody request;
    public EndpointUnfollowArtistsUsersRequest withRequest(EndpointUnfollowArtistsUsersRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointUnfollowArtistsUsersSecurity security;
    public EndpointUnfollowArtistsUsersRequest withSecurity(EndpointUnfollowArtistsUsersSecurity security) {
        this.security = security;
        return this;
    }
}