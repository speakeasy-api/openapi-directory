package openapisdk.models.operations;



public class CreateFilePaymentsRequest {
    public CreateFilePaymentsHeaders headers;
    public CreateFilePaymentsRequest withHeaders(CreateFilePaymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CreateFilePaymentsRequests request;
    public CreateFilePaymentsRequest withRequest(CreateFilePaymentsRequests request) {
        this.request = request;
        return this;
    }
    public CreateFilePaymentsSecurity security;
    public CreateFilePaymentsRequest withSecurity(CreateFilePaymentsSecurity security) {
        this.security = security;
        return this;
    }
}