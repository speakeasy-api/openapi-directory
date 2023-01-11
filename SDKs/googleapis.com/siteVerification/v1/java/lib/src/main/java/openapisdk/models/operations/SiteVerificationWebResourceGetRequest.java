package openapisdk.models.operations;



public class SiteVerificationWebResourceGetRequest {
    public SiteVerificationWebResourceGetPathParams pathParams;
    public SiteVerificationWebResourceGetRequest withPathParams(SiteVerificationWebResourceGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SiteVerificationWebResourceGetQueryParams queryParams;
    public SiteVerificationWebResourceGetRequest withQueryParams(SiteVerificationWebResourceGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SiteVerificationWebResourceGetSecurity security;
    public SiteVerificationWebResourceGetRequest withSecurity(SiteVerificationWebResourceGetSecurity security) {
        this.security = security;
        return this;
    }
}