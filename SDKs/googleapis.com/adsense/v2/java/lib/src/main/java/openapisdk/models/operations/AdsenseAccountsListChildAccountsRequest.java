package openapisdk.models.operations;



public class AdsenseAccountsListChildAccountsRequest {
    public AdsenseAccountsListChildAccountsPathParams pathParams;
    public AdsenseAccountsListChildAccountsRequest withPathParams(AdsenseAccountsListChildAccountsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsenseAccountsListChildAccountsQueryParams queryParams;
    public AdsenseAccountsListChildAccountsRequest withQueryParams(AdsenseAccountsListChildAccountsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdsenseAccountsListChildAccountsSecurity security;
    public AdsenseAccountsListChildAccountsRequest withSecurity(AdsenseAccountsListChildAccountsSecurity security) {
        this.security = security;
        return this;
    }
}