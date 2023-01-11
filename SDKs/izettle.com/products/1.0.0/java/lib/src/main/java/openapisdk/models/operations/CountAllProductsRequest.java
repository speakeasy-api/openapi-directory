package openapisdk.models.operations;



public class CountAllProductsRequest {
    public CountAllProductsPathParams pathParams;
    public CountAllProductsRequest withPathParams(CountAllProductsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CountAllProductsSecurity security;
    public CountAllProductsRequest withSecurity(CountAllProductsSecurity security) {
        this.security = security;
        return this;
    }
}