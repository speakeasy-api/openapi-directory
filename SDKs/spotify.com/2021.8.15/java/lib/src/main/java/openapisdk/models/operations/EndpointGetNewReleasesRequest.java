package openapisdk.models.operations;



public class EndpointGetNewReleasesRequest {
    public EndpointGetNewReleasesQueryParams queryParams;
    public EndpointGetNewReleasesRequest withQueryParams(EndpointGetNewReleasesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetNewReleasesHeaders headers;
    public EndpointGetNewReleasesRequest withHeaders(EndpointGetNewReleasesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetNewReleasesSecurity security;
    public EndpointGetNewReleasesRequest withSecurity(EndpointGetNewReleasesSecurity security) {
        this.security = security;
        return this;
    }
}