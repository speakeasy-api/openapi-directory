package openapisdk.models.operations;



public class CreateDomesticScheduledPaymentConsentsRequest {
    public CreateDomesticScheduledPaymentConsentsHeaders headers;
    public CreateDomesticScheduledPaymentConsentsRequest withHeaders(CreateDomesticScheduledPaymentConsentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CreateDomesticScheduledPaymentConsentsRequests request;
    public CreateDomesticScheduledPaymentConsentsRequest withRequest(CreateDomesticScheduledPaymentConsentsRequests request) {
        this.request = request;
        return this;
    }
    public CreateDomesticScheduledPaymentConsentsSecurity security;
    public CreateDomesticScheduledPaymentConsentsRequest withSecurity(CreateDomesticScheduledPaymentConsentsSecurity security) {
        this.security = security;
        return this;
    }
}