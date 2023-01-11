package openapisdk.models.operations;



public class EndpointGetMultipleArtistsRequest {
    public EndpointGetMultipleArtistsQueryParams queryParams;
    public EndpointGetMultipleArtistsRequest withQueryParams(EndpointGetMultipleArtistsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetMultipleArtistsHeaders headers;
    public EndpointGetMultipleArtistsRequest withHeaders(EndpointGetMultipleArtistsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetMultipleArtistsSecurity security;
    public EndpointGetMultipleArtistsRequest withSecurity(EndpointGetMultipleArtistsSecurity security) {
        this.security = security;
        return this;
    }
}