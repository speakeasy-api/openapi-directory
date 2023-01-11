package openapisdk.models.operations;



public class EndpointGetACategoriesPlaylistsRequest {
    public EndpointGetACategoriesPlaylistsPathParams pathParams;
    public EndpointGetACategoriesPlaylistsRequest withPathParams(EndpointGetACategoriesPlaylistsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetACategoriesPlaylistsQueryParams queryParams;
    public EndpointGetACategoriesPlaylistsRequest withQueryParams(EndpointGetACategoriesPlaylistsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetACategoriesPlaylistsHeaders headers;
    public EndpointGetACategoriesPlaylistsRequest withHeaders(EndpointGetACategoriesPlaylistsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetACategoriesPlaylistsSecurity security;
    public EndpointGetACategoriesPlaylistsRequest withSecurity(EndpointGetACategoriesPlaylistsSecurity security) {
        this.security = security;
        return this;
    }
}