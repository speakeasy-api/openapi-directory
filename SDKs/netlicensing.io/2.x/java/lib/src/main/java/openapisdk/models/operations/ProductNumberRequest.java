package openapisdk.models.operations;



public class ProductNumberRequest {
    public ProductNumberPathParams pathParams;
    public ProductNumberRequest withPathParams(ProductNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProductNumberSecurity security;
    public ProductNumberRequest withSecurity(ProductNumberSecurity security) {
        this.security = security;
        return this;
    }
}