package openapisdk.models.operations;



public class CreateInternationalScheduledPaymentConsentsRequest {
    public CreateInternationalScheduledPaymentConsentsHeaders headers;
    public CreateInternationalScheduledPaymentConsentsRequest withHeaders(CreateInternationalScheduledPaymentConsentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CreateInternationalScheduledPaymentConsentsRequests request;
    public CreateInternationalScheduledPaymentConsentsRequest withRequest(CreateInternationalScheduledPaymentConsentsRequests request) {
        this.request = request;
        return this;
    }
    public CreateInternationalScheduledPaymentConsentsSecurity security;
    public CreateInternationalScheduledPaymentConsentsRequest withSecurity(CreateInternationalScheduledPaymentConsentsSecurity security) {
        this.security = security;
        return this;
    }
}