package openapisdk.models.operations;



public class GetAllDiscountsRequest {
    public GetAllDiscountsPathParams pathParams;
    public GetAllDiscountsRequest withPathParams(GetAllDiscountsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAllDiscountsSecurity security;
    public GetAllDiscountsRequest withSecurity(GetAllDiscountsSecurity security) {
        this.security = security;
        return this;
    }
}