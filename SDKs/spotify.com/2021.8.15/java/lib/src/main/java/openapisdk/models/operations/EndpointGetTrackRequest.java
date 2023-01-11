package openapisdk.models.operations;



public class EndpointGetTrackRequest {
    public EndpointGetTrackPathParams pathParams;
    public EndpointGetTrackRequest withPathParams(EndpointGetTrackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetTrackQueryParams queryParams;
    public EndpointGetTrackRequest withQueryParams(EndpointGetTrackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetTrackHeaders headers;
    public EndpointGetTrackRequest withHeaders(EndpointGetTrackHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetTrackSecurity security;
    public EndpointGetTrackRequest withSecurity(EndpointGetTrackSecurity security) {
        this.security = security;
        return this;
    }
}