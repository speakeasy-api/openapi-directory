package openapisdk.models.operations;



public class InitiatePaymentRequest {
    public InitiatePaymentPathParams pathParams;
    public InitiatePaymentRequest withPathParams(InitiatePaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InitiatePaymentHeaders headers;
    public InitiatePaymentRequest withHeaders(InitiatePaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    public InitiatePaymentRequests request;
    public InitiatePaymentRequest withRequest(InitiatePaymentRequests request) {
        this.request = request;
        return this;
    }
    public InitiatePaymentSecurity security;
    public InitiatePaymentRequest withSecurity(InitiatePaymentSecurity security) {
        this.security = security;
        return this;
    }
}