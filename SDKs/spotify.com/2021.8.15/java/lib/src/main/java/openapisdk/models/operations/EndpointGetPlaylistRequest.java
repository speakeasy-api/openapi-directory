package openapisdk.models.operations;



public class EndpointGetPlaylistRequest {
    public EndpointGetPlaylistPathParams pathParams;
    public EndpointGetPlaylistRequest withPathParams(EndpointGetPlaylistPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetPlaylistQueryParams queryParams;
    public EndpointGetPlaylistRequest withQueryParams(EndpointGetPlaylistQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetPlaylistHeaders headers;
    public EndpointGetPlaylistRequest withHeaders(EndpointGetPlaylistHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetPlaylistSecurity security;
    public EndpointGetPlaylistRequest withSecurity(EndpointGetPlaylistSecurity security) {
        this.security = security;
        return this;
    }
}