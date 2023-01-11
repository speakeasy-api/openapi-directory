package openapisdk.models.operations;



public class DeleteTaxRateRequest {
    public DeleteTaxRatePathParams pathParams;
    public DeleteTaxRateRequest withPathParams(DeleteTaxRatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTaxRateSecurity security;
    public DeleteTaxRateRequest withSecurity(DeleteTaxRateSecurity security) {
        this.security = security;
        return this;
    }
}