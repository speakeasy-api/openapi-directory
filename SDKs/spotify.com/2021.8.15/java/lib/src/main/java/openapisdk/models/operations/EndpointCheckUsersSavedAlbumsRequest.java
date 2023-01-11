package openapisdk.models.operations;



public class EndpointCheckUsersSavedAlbumsRequest {
    public EndpointCheckUsersSavedAlbumsQueryParams queryParams;
    public EndpointCheckUsersSavedAlbumsRequest withQueryParams(EndpointCheckUsersSavedAlbumsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointCheckUsersSavedAlbumsHeaders headers;
    public EndpointCheckUsersSavedAlbumsRequest withHeaders(EndpointCheckUsersSavedAlbumsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointCheckUsersSavedAlbumsSecurity security;
    public EndpointCheckUsersSavedAlbumsRequest withSecurity(EndpointCheckUsersSavedAlbumsSecurity security) {
        this.security = security;
        return this;
    }
}