package openapisdk.models.operations;



public class GetPaymentMethodRequest {
    public GetPaymentMethodPathParams pathParams;
    public GetPaymentMethodRequest withPathParams(GetPaymentMethodPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentMethodSecurity security;
    public GetPaymentMethodRequest withSecurity(GetPaymentMethodSecurity security) {
        this.security = security;
        return this;
    }
}