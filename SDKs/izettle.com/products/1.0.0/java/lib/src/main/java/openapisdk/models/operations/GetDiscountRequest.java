package openapisdk.models.operations;



public class GetDiscountRequest {
    public GetDiscountPathParams pathParams;
    public GetDiscountRequest withPathParams(GetDiscountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDiscountHeaders headers;
    public GetDiscountRequest withHeaders(GetDiscountHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetDiscountSecurity security;
    public GetDiscountRequest withSecurity(GetDiscountSecurity security) {
        this.security = security;
        return this;
    }
}