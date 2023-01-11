package openapisdk.models.operations;



public class CreateDomesticPaymentsRequest {
    public CreateDomesticPaymentsHeaders headers;
    public CreateDomesticPaymentsRequest withHeaders(CreateDomesticPaymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CreateDomesticPaymentsRequests request;
    public CreateDomesticPaymentsRequest withRequest(CreateDomesticPaymentsRequests request) {
        this.request = request;
        return this;
    }
    public CreateDomesticPaymentsSecurity security;
    public CreateDomesticPaymentsRequest withSecurity(CreateDomesticPaymentsSecurity security) {
        this.security = security;
        return this;
    }
}