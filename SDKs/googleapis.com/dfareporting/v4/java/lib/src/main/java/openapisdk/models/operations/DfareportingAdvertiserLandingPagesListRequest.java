package openapisdk.models.operations;



public class DfareportingAdvertiserLandingPagesListRequest {
    public DfareportingAdvertiserLandingPagesListPathParams pathParams;
    public DfareportingAdvertiserLandingPagesListRequest withPathParams(DfareportingAdvertiserLandingPagesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdvertiserLandingPagesListQueryParams queryParams;
    public DfareportingAdvertiserLandingPagesListRequest withQueryParams(DfareportingAdvertiserLandingPagesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingAdvertiserLandingPagesListSecurity security;
    public DfareportingAdvertiserLandingPagesListRequest withSecurity(DfareportingAdvertiserLandingPagesListSecurity security) {
        this.security = security;
        return this;
    }
}