package openapisdk.models.operations;



public class EndpointGetAnArtistsAlbumsRequest {
    public EndpointGetAnArtistsAlbumsPathParams pathParams;
    public EndpointGetAnArtistsAlbumsRequest withPathParams(EndpointGetAnArtistsAlbumsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetAnArtistsAlbumsQueryParams queryParams;
    public EndpointGetAnArtistsAlbumsRequest withQueryParams(EndpointGetAnArtistsAlbumsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetAnArtistsAlbumsHeaders headers;
    public EndpointGetAnArtistsAlbumsRequest withHeaders(EndpointGetAnArtistsAlbumsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetAnArtistsAlbumsSecurity security;
    public EndpointGetAnArtistsAlbumsRequest withSecurity(EndpointGetAnArtistsAlbumsSecurity security) {
        this.security = security;
        return this;
    }
}