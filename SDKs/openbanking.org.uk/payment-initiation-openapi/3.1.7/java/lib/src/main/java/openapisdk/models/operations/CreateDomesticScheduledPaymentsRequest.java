package openapisdk.models.operations;



public class CreateDomesticScheduledPaymentsRequest {
    public CreateDomesticScheduledPaymentsHeaders headers;
    public CreateDomesticScheduledPaymentsRequest withHeaders(CreateDomesticScheduledPaymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CreateDomesticScheduledPaymentsRequests request;
    public CreateDomesticScheduledPaymentsRequest withRequest(CreateDomesticScheduledPaymentsRequests request) {
        this.request = request;
        return this;
    }
    public CreateDomesticScheduledPaymentsSecurity security;
    public CreateDomesticScheduledPaymentsRequest withSecurity(CreateDomesticScheduledPaymentsSecurity security) {
        this.security = security;
        return this;
    }
}