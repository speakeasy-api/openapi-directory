package openapisdk.models.operations;



public class EndpointGetAShowRequest {
    public EndpointGetAShowPathParams pathParams;
    public EndpointGetAShowRequest withPathParams(EndpointGetAShowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetAShowQueryParams queryParams;
    public EndpointGetAShowRequest withQueryParams(EndpointGetAShowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetAShowHeaders headers;
    public EndpointGetAShowRequest withHeaders(EndpointGetAShowHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetAShowSecurity security;
    public EndpointGetAShowRequest withSecurity(EndpointGetAShowSecurity security) {
        this.security = security;
        return this;
    }
}