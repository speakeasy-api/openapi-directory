package openapisdk.models.operations;



public class EndpointGetAnAlbumsTracksRequest {
    public EndpointGetAnAlbumsTracksPathParams pathParams;
    public EndpointGetAnAlbumsTracksRequest withPathParams(EndpointGetAnAlbumsTracksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetAnAlbumsTracksQueryParams queryParams;
    public EndpointGetAnAlbumsTracksRequest withQueryParams(EndpointGetAnAlbumsTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetAnAlbumsTracksHeaders headers;
    public EndpointGetAnAlbumsTracksRequest withHeaders(EndpointGetAnAlbumsTracksHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetAnAlbumsTracksSecurity security;
    public EndpointGetAnAlbumsTracksRequest withSecurity(EndpointGetAnAlbumsTracksSecurity security) {
        this.security = security;
        return this;
    }
}