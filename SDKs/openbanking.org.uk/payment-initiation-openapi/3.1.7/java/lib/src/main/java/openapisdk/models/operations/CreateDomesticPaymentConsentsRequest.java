package openapisdk.models.operations;



public class CreateDomesticPaymentConsentsRequest {
    public CreateDomesticPaymentConsentsHeaders headers;
    public CreateDomesticPaymentConsentsRequest withHeaders(CreateDomesticPaymentConsentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CreateDomesticPaymentConsentsRequests request;
    public CreateDomesticPaymentConsentsRequest withRequest(CreateDomesticPaymentConsentsRequests request) {
        this.request = request;
        return this;
    }
    public CreateDomesticPaymentConsentsSecurity security;
    public CreateDomesticPaymentConsentsRequest withSecurity(CreateDomesticPaymentConsentsSecurity security) {
        this.security = security;
        return this;
    }
}