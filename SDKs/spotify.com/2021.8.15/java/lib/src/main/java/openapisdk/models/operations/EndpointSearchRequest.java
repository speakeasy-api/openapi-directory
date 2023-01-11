package openapisdk.models.operations;



public class EndpointSearchRequest {
    public EndpointSearchQueryParams queryParams;
    public EndpointSearchRequest withQueryParams(EndpointSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointSearchHeaders headers;
    public EndpointSearchRequest withHeaders(EndpointSearchHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointSearchSecurity security;
    public EndpointSearchRequest withSecurity(EndpointSearchSecurity security) {
        this.security = security;
        return this;
    }
}