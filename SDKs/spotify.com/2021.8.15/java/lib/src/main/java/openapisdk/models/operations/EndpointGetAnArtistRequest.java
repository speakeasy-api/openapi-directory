package openapisdk.models.operations;



public class EndpointGetAnArtistRequest {
    public EndpointGetAnArtistPathParams pathParams;
    public EndpointGetAnArtistRequest withPathParams(EndpointGetAnArtistPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetAnArtistHeaders headers;
    public EndpointGetAnArtistRequest withHeaders(EndpointGetAnArtistHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetAnArtistSecurity security;
    public EndpointGetAnArtistRequest withSecurity(EndpointGetAnArtistSecurity security) {
        this.security = security;
        return this;
    }
}