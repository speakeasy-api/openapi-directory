package openapisdk.models.operations;



public class EndpointAddToQueueRequest {
    public EndpointAddToQueueQueryParams queryParams;
    public EndpointAddToQueueRequest withQueryParams(EndpointAddToQueueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointAddToQueueHeaders headers;
    public EndpointAddToQueueRequest withHeaders(EndpointAddToQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointAddToQueueSecurity security;
    public EndpointAddToQueueRequest withSecurity(EndpointAddToQueueSecurity security) {
        this.security = security;
        return this;
    }
}