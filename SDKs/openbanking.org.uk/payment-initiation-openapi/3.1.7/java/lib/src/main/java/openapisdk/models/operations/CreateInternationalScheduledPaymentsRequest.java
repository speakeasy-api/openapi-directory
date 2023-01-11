package openapisdk.models.operations;



public class CreateInternationalScheduledPaymentsRequest {
    public CreateInternationalScheduledPaymentsHeaders headers;
    public CreateInternationalScheduledPaymentsRequest withHeaders(CreateInternationalScheduledPaymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CreateInternationalScheduledPaymentsRequests request;
    public CreateInternationalScheduledPaymentsRequest withRequest(CreateInternationalScheduledPaymentsRequests request) {
        this.request = request;
        return this;
    }
    public CreateInternationalScheduledPaymentsSecurity security;
    public CreateInternationalScheduledPaymentsRequest withSecurity(CreateInternationalScheduledPaymentsSecurity security) {
        this.security = security;
        return this;
    }
}