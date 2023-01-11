package openapisdk.models.operations;



public class EndpointGetAListOfCurrentUsersPlaylistsRequest {
    public EndpointGetAListOfCurrentUsersPlaylistsQueryParams queryParams;
    public EndpointGetAListOfCurrentUsersPlaylistsRequest withQueryParams(EndpointGetAListOfCurrentUsersPlaylistsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetAListOfCurrentUsersPlaylistsHeaders headers;
    public EndpointGetAListOfCurrentUsersPlaylistsRequest withHeaders(EndpointGetAListOfCurrentUsersPlaylistsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetAListOfCurrentUsersPlaylistsSecurity security;
    public EndpointGetAListOfCurrentUsersPlaylistsRequest withSecurity(EndpointGetAListOfCurrentUsersPlaylistsSecurity security) {
        this.security = security;
        return this;
    }
}