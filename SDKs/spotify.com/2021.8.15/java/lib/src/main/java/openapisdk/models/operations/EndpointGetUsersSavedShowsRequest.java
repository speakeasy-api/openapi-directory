package openapisdk.models.operations;



public class EndpointGetUsersSavedShowsRequest {
    public EndpointGetUsersSavedShowsQueryParams queryParams;
    public EndpointGetUsersSavedShowsRequest withQueryParams(EndpointGetUsersSavedShowsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetUsersSavedShowsHeaders headers;
    public EndpointGetUsersSavedShowsRequest withHeaders(EndpointGetUsersSavedShowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetUsersSavedShowsSecurity security;
    public EndpointGetUsersSavedShowsRequest withSecurity(EndpointGetUsersSavedShowsSecurity security) {
        this.security = security;
        return this;
    }
}