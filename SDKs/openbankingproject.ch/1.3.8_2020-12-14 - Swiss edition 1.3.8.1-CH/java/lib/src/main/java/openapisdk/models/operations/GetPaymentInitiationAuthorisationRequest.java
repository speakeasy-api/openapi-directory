package openapisdk.models.operations;



public class GetPaymentInitiationAuthorisationRequest {
    public GetPaymentInitiationAuthorisationPathParams pathParams;
    public GetPaymentInitiationAuthorisationRequest withPathParams(GetPaymentInitiationAuthorisationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentInitiationAuthorisationHeaders headers;
    public GetPaymentInitiationAuthorisationRequest withHeaders(GetPaymentInitiationAuthorisationHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPaymentInitiationAuthorisationSecurity security;
    public GetPaymentInitiationAuthorisationRequest withSecurity(GetPaymentInitiationAuthorisationSecurity security) {
        this.security = security;
        return this;
    }
}