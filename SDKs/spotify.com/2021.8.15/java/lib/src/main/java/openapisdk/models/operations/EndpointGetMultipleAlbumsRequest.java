package openapisdk.models.operations;



public class EndpointGetMultipleAlbumsRequest {
    public EndpointGetMultipleAlbumsQueryParams queryParams;
    public EndpointGetMultipleAlbumsRequest withQueryParams(EndpointGetMultipleAlbumsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetMultipleAlbumsHeaders headers;
    public EndpointGetMultipleAlbumsRequest withHeaders(EndpointGetMultipleAlbumsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetMultipleAlbumsSecurity security;
    public EndpointGetMultipleAlbumsRequest withSecurity(EndpointGetMultipleAlbumsSecurity security) {
        this.security = security;
        return this;
    }
}