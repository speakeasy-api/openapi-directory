package openapisdk.models.operations;



public class CreateInternationalStandingOrdersRequest {
    public CreateInternationalStandingOrdersHeaders headers;
    public CreateInternationalStandingOrdersRequest withHeaders(CreateInternationalStandingOrdersHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CreateInternationalStandingOrdersRequests request;
    public CreateInternationalStandingOrdersRequest withRequest(CreateInternationalStandingOrdersRequests request) {
        this.request = request;
        return this;
    }
    public CreateInternationalStandingOrdersSecurity security;
    public CreateInternationalStandingOrdersRequest withSecurity(CreateInternationalStandingOrdersSecurity security) {
        this.security = security;
        return this;
    }
}