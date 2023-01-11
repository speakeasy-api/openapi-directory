package openapisdk.models.operations;



public class AdsenseAccountsReportsSavedGenerateRequest {
    public AdsenseAccountsReportsSavedGeneratePathParams pathParams;
    public AdsenseAccountsReportsSavedGenerateRequest withPathParams(AdsenseAccountsReportsSavedGeneratePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsenseAccountsReportsSavedGenerateQueryParams queryParams;
    public AdsenseAccountsReportsSavedGenerateRequest withQueryParams(AdsenseAccountsReportsSavedGenerateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdsenseAccountsReportsSavedGenerateSecurity security;
    public AdsenseAccountsReportsSavedGenerateRequest withSecurity(AdsenseAccountsReportsSavedGenerateSecurity security) {
        this.security = security;
        return this;
    }
}