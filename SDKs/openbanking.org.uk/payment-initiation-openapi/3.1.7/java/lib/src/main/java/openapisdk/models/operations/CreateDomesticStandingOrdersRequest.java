package openapisdk.models.operations;



public class CreateDomesticStandingOrdersRequest {
    public CreateDomesticStandingOrdersHeaders headers;
    public CreateDomesticStandingOrdersRequest withHeaders(CreateDomesticStandingOrdersHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CreateDomesticStandingOrdersRequests request;
    public CreateDomesticStandingOrdersRequest withRequest(CreateDomesticStandingOrdersRequests request) {
        this.request = request;
        return this;
    }
    public CreateDomesticStandingOrdersSecurity security;
    public CreateDomesticStandingOrdersRequest withSecurity(CreateDomesticStandingOrdersSecurity security) {
        this.security = security;
        return this;
    }
}