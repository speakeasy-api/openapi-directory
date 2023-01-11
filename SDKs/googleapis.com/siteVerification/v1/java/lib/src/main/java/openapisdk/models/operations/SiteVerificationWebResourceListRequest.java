package openapisdk.models.operations;



public class SiteVerificationWebResourceListRequest {
    public SiteVerificationWebResourceListQueryParams queryParams;
    public SiteVerificationWebResourceListRequest withQueryParams(SiteVerificationWebResourceListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SiteVerificationWebResourceListSecurity security;
    public SiteVerificationWebResourceListRequest withSecurity(SiteVerificationWebResourceListSecurity security) {
        this.security = security;
        return this;
    }
}