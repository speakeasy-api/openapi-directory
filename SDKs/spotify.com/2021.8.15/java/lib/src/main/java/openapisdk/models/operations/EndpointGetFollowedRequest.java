package openapisdk.models.operations;



public class EndpointGetFollowedRequest {
    public EndpointGetFollowedQueryParams queryParams;
    public EndpointGetFollowedRequest withQueryParams(EndpointGetFollowedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetFollowedHeaders headers;
    public EndpointGetFollowedRequest withHeaders(EndpointGetFollowedHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetFollowedSecurity security;
    public EndpointGetFollowedRequest withSecurity(EndpointGetFollowedSecurity security) {
        this.security = security;
        return this;
    }
}