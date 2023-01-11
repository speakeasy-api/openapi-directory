package openapisdk.models.operations;



public class EndpointGetFeaturedPlaylistsRequest {
    public EndpointGetFeaturedPlaylistsQueryParams queryParams;
    public EndpointGetFeaturedPlaylistsRequest withQueryParams(EndpointGetFeaturedPlaylistsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetFeaturedPlaylistsHeaders headers;
    public EndpointGetFeaturedPlaylistsRequest withHeaders(EndpointGetFeaturedPlaylistsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetFeaturedPlaylistsSecurity security;
    public EndpointGetFeaturedPlaylistsRequest withSecurity(EndpointGetFeaturedPlaylistsSecurity security) {
        this.security = security;
        return this;
    }
}