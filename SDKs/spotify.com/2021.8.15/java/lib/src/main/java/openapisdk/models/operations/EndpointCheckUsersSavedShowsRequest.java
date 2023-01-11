package openapisdk.models.operations;



public class EndpointCheckUsersSavedShowsRequest {
    public EndpointCheckUsersSavedShowsQueryParams queryParams;
    public EndpointCheckUsersSavedShowsRequest withQueryParams(EndpointCheckUsersSavedShowsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointCheckUsersSavedShowsHeaders headers;
    public EndpointCheckUsersSavedShowsRequest withHeaders(EndpointCheckUsersSavedShowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointCheckUsersSavedShowsSecurity security;
    public EndpointCheckUsersSavedShowsRequest withSecurity(EndpointCheckUsersSavedShowsSecurity security) {
        this.security = security;
        return this;
    }
}