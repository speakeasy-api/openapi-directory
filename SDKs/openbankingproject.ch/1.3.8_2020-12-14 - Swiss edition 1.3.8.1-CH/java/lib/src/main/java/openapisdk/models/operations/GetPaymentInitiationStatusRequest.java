package openapisdk.models.operations;



public class GetPaymentInitiationStatusRequest {
    public GetPaymentInitiationStatusPathParams pathParams;
    public GetPaymentInitiationStatusRequest withPathParams(GetPaymentInitiationStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentInitiationStatusHeaders headers;
    public GetPaymentInitiationStatusRequest withHeaders(GetPaymentInitiationStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPaymentInitiationStatusSecurity security;
    public GetPaymentInitiationStatusRequest withSecurity(GetPaymentInitiationStatusSecurity security) {
        this.security = security;
        return this;
    }
}