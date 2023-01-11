package openapisdk.models.operations;



public class AdsenseAccountsListRequest {
    public AdsenseAccountsListQueryParams queryParams;
    public AdsenseAccountsListRequest withQueryParams(AdsenseAccountsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdsenseAccountsListSecurity security;
    public AdsenseAccountsListRequest withSecurity(AdsenseAccountsListSecurity security) {
        this.security = security;
        return this;
    }
}