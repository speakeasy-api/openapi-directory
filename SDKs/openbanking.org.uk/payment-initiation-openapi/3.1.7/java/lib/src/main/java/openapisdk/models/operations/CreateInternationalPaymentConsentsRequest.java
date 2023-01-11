package openapisdk.models.operations;



public class CreateInternationalPaymentConsentsRequest {
    public CreateInternationalPaymentConsentsHeaders headers;
    public CreateInternationalPaymentConsentsRequest withHeaders(CreateInternationalPaymentConsentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CreateInternationalPaymentConsentsRequests request;
    public CreateInternationalPaymentConsentsRequest withRequest(CreateInternationalPaymentConsentsRequests request) {
        this.request = request;
        return this;
    }
    public CreateInternationalPaymentConsentsSecurity security;
    public CreateInternationalPaymentConsentsRequest withSecurity(CreateInternationalPaymentConsentsSecurity security) {
        this.security = security;
        return this;
    }
}