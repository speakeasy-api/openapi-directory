package openapisdk.models.operations;



public class AdsenseAccountsReportsGenerateRequest {
    public AdsenseAccountsReportsGeneratePathParams pathParams;
    public AdsenseAccountsReportsGenerateRequest withPathParams(AdsenseAccountsReportsGeneratePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsenseAccountsReportsGenerateQueryParams queryParams;
    public AdsenseAccountsReportsGenerateRequest withQueryParams(AdsenseAccountsReportsGenerateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdsenseAccountsReportsGenerateSecurity security;
    public AdsenseAccountsReportsGenerateRequest withSecurity(AdsenseAccountsReportsGenerateSecurity security) {
        this.security = security;
        return this;
    }
}