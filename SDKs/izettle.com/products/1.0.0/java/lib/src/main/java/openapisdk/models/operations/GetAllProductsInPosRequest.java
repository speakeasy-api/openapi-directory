package openapisdk.models.operations;



public class GetAllProductsInPosRequest {
    public GetAllProductsInPosPathParams pathParams;
    public GetAllProductsInPosRequest withPathParams(GetAllProductsInPosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAllProductsInPosSecurity security;
    public GetAllProductsInPosRequest withSecurity(GetAllProductsInPosSecurity security) {
        this.security = security;
        return this;
    }
}