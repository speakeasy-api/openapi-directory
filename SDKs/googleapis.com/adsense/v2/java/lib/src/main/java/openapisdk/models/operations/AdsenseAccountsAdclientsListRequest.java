package openapisdk.models.operations;



public class AdsenseAccountsAdclientsListRequest {
    public AdsenseAccountsAdclientsListPathParams pathParams;
    public AdsenseAccountsAdclientsListRequest withPathParams(AdsenseAccountsAdclientsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsenseAccountsAdclientsListQueryParams queryParams;
    public AdsenseAccountsAdclientsListRequest withQueryParams(AdsenseAccountsAdclientsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdsenseAccountsAdclientsListSecurity security;
    public AdsenseAccountsAdclientsListRequest withSecurity(AdsenseAccountsAdclientsListSecurity security) {
        this.security = security;
        return this;
    }
}