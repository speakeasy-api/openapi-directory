package openapisdk.models.operations;



public class EndpointGetUsersSavedAlbumsRequest {
    public EndpointGetUsersSavedAlbumsQueryParams queryParams;
    public EndpointGetUsersSavedAlbumsRequest withQueryParams(EndpointGetUsersSavedAlbumsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetUsersSavedAlbumsHeaders headers;
    public EndpointGetUsersSavedAlbumsRequest withHeaders(EndpointGetUsersSavedAlbumsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetUsersSavedAlbumsSecurity security;
    public EndpointGetUsersSavedAlbumsRequest withSecurity(EndpointGetUsersSavedAlbumsSecurity security) {
        this.security = security;
        return this;
    }
}