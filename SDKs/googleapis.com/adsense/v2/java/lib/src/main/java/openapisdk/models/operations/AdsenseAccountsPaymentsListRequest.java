package openapisdk.models.operations;



public class AdsenseAccountsPaymentsListRequest {
    public AdsenseAccountsPaymentsListPathParams pathParams;
    public AdsenseAccountsPaymentsListRequest withPathParams(AdsenseAccountsPaymentsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsenseAccountsPaymentsListQueryParams queryParams;
    public AdsenseAccountsPaymentsListRequest withQueryParams(AdsenseAccountsPaymentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdsenseAccountsPaymentsListSecurity security;
    public AdsenseAccountsPaymentsListRequest withSecurity(AdsenseAccountsPaymentsListSecurity security) {
        this.security = security;
        return this;
    }
}