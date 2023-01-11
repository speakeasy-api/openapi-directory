package openapisdk.models.operations;



public class EndpointGetMultipleShowsRequest {
    public EndpointGetMultipleShowsQueryParams queryParams;
    public EndpointGetMultipleShowsRequest withQueryParams(EndpointGetMultipleShowsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetMultipleShowsHeaders headers;
    public EndpointGetMultipleShowsRequest withHeaders(EndpointGetMultipleShowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetMultipleShowsSecurity security;
    public EndpointGetMultipleShowsRequest withSecurity(EndpointGetMultipleShowsSecurity security) {
        this.security = security;
        return this;
    }
}