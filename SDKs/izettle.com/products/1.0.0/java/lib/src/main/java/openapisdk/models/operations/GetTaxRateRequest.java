package openapisdk.models.operations;



public class GetTaxRateRequest {
    public GetTaxRatePathParams pathParams;
    public GetTaxRateRequest withPathParams(GetTaxRatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTaxRateSecurity security;
    public GetTaxRateRequest withSecurity(GetTaxRateSecurity security) {
        this.security = security;
        return this;
    }
}