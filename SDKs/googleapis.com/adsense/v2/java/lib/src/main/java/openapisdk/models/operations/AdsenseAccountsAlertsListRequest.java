package openapisdk.models.operations;



public class AdsenseAccountsAlertsListRequest {
    public AdsenseAccountsAlertsListPathParams pathParams;
    public AdsenseAccountsAlertsListRequest withPathParams(AdsenseAccountsAlertsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsenseAccountsAlertsListQueryParams queryParams;
    public AdsenseAccountsAlertsListRequest withQueryParams(AdsenseAccountsAlertsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdsenseAccountsAlertsListSecurity security;
    public AdsenseAccountsAlertsListRequest withSecurity(AdsenseAccountsAlertsListSecurity security) {
        this.security = security;
        return this;
    }
}