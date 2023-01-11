package openapisdk.models.operations;



public class CreateFilePaymentConsentsRequest {
    public CreateFilePaymentConsentsHeaders headers;
    public CreateFilePaymentConsentsRequest withHeaders(CreateFilePaymentConsentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CreateFilePaymentConsentsRequests request;
    public CreateFilePaymentConsentsRequest withRequest(CreateFilePaymentConsentsRequests request) {
        this.request = request;
        return this;
    }
    public CreateFilePaymentConsentsSecurity security;
    public CreateFilePaymentConsentsRequest withSecurity(CreateFilePaymentConsentsSecurity security) {
        this.security = security;
        return this;
    }
}