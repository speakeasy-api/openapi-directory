package openapisdk.models.operations;



public class EndpointGetRecentlyPlayedRequest {
    public EndpointGetRecentlyPlayedQueryParams queryParams;
    public EndpointGetRecentlyPlayedRequest withQueryParams(EndpointGetRecentlyPlayedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetRecentlyPlayedHeaders headers;
    public EndpointGetRecentlyPlayedRequest withHeaders(EndpointGetRecentlyPlayedHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetRecentlyPlayedSecurity security;
    public EndpointGetRecentlyPlayedRequest withSecurity(EndpointGetRecentlyPlayedSecurity security) {
        this.security = security;
        return this;
    }
}