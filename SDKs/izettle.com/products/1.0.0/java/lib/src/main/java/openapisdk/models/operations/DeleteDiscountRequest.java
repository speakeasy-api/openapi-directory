package openapisdk.models.operations;



public class DeleteDiscountRequest {
    public DeleteDiscountPathParams pathParams;
    public DeleteDiscountRequest withPathParams(DeleteDiscountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDiscountSecurity security;
    public DeleteDiscountRequest withSecurity(DeleteDiscountSecurity security) {
        this.security = security;
        return this;
    }
}