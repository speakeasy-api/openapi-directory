package openapisdk.models.operations;



public class DfareportingBillingRatesListRequest {
    public DfareportingBillingRatesListPathParams pathParams;
    public DfareportingBillingRatesListRequest withPathParams(DfareportingBillingRatesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingBillingRatesListQueryParams queryParams;
    public DfareportingBillingRatesListRequest withQueryParams(DfareportingBillingRatesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingBillingRatesListSecurity security;
    public DfareportingBillingRatesListRequest withSecurity(DfareportingBillingRatesListSecurity security) {
        this.security = security;
        return this;
    }
}