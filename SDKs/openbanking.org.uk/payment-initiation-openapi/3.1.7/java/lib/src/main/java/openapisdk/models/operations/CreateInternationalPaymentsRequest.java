package openapisdk.models.operations;



public class CreateInternationalPaymentsRequest {
    public CreateInternationalPaymentsHeaders headers;
    public CreateInternationalPaymentsRequest withHeaders(CreateInternationalPaymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CreateInternationalPaymentsRequests request;
    public CreateInternationalPaymentsRequest withRequest(CreateInternationalPaymentsRequests request) {
        this.request = request;
        return this;
    }
    public CreateInternationalPaymentsSecurity security;
    public CreateInternationalPaymentsRequest withSecurity(CreateInternationalPaymentsSecurity security) {
        this.security = security;
        return this;
    }
}