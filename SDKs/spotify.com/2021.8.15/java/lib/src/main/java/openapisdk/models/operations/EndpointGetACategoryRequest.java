package openapisdk.models.operations;



public class EndpointGetACategoryRequest {
    public EndpointGetACategoryPathParams pathParams;
    public EndpointGetACategoryRequest withPathParams(EndpointGetACategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetACategoryQueryParams queryParams;
    public EndpointGetACategoryRequest withQueryParams(EndpointGetACategoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetACategoryHeaders headers;
    public EndpointGetACategoryRequest withHeaders(EndpointGetACategoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetACategorySecurity security;
    public EndpointGetACategoryRequest withSecurity(EndpointGetACategorySecurity security) {
        this.security = security;
        return this;
    }
}