package openapisdk.models.operations;



public class EndpointGetAnAlbumRequest {
    public EndpointGetAnAlbumPathParams pathParams;
    public EndpointGetAnAlbumRequest withPathParams(EndpointGetAnAlbumPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetAnAlbumQueryParams queryParams;
    public EndpointGetAnAlbumRequest withQueryParams(EndpointGetAnAlbumQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetAnAlbumHeaders headers;
    public EndpointGetAnAlbumRequest withHeaders(EndpointGetAnAlbumHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetAnAlbumSecurity security;
    public EndpointGetAnAlbumRequest withSecurity(EndpointGetAnAlbumSecurity security) {
        this.security = security;
        return this;
    }
}