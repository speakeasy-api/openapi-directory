package openapisdk.models.operations;



public class EndpointGetCategoriesRequest {
    public EndpointGetCategoriesQueryParams queryParams;
    public EndpointGetCategoriesRequest withQueryParams(EndpointGetCategoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetCategoriesHeaders headers;
    public EndpointGetCategoriesRequest withHeaders(EndpointGetCategoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetCategoriesSecurity security;
    public EndpointGetCategoriesRequest withSecurity(EndpointGetCategoriesSecurity security) {
        this.security = security;
        return this;
    }
}