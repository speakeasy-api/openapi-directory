package openapisdk.models.operations;



public class EndpointGetListUsersPlaylistsRequest {
    public EndpointGetListUsersPlaylistsPathParams pathParams;
    public EndpointGetListUsersPlaylistsRequest withPathParams(EndpointGetListUsersPlaylistsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetListUsersPlaylistsQueryParams queryParams;
    public EndpointGetListUsersPlaylistsRequest withQueryParams(EndpointGetListUsersPlaylistsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetListUsersPlaylistsHeaders headers;
    public EndpointGetListUsersPlaylistsRequest withHeaders(EndpointGetListUsersPlaylistsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetListUsersPlaylistsSecurity security;
    public EndpointGetListUsersPlaylistsRequest withSecurity(EndpointGetListUsersPlaylistsSecurity security) {
        this.security = security;
        return this;
    }
}