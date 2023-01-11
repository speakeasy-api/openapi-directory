package openapisdk.models.operations;



public class EndpointCheckCurrentUserFollowsRequest {
    public EndpointCheckCurrentUserFollowsQueryParams queryParams;
    public EndpointCheckCurrentUserFollowsRequest withQueryParams(EndpointCheckCurrentUserFollowsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointCheckCurrentUserFollowsHeaders headers;
    public EndpointCheckCurrentUserFollowsRequest withHeaders(EndpointCheckCurrentUserFollowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointCheckCurrentUserFollowsSecurity security;
    public EndpointCheckCurrentUserFollowsRequest withSecurity(EndpointCheckCurrentUserFollowsSecurity security) {
        this.security = security;
        return this;
    }
}