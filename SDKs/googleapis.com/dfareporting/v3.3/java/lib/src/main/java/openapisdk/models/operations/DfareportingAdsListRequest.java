package openapisdk.models.operations;



public class DfareportingAdsListRequest {
    public DfareportingAdsListPathParams pathParams;
    public DfareportingAdsListRequest withPathParams(DfareportingAdsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdsListQueryParams queryParams;
    public DfareportingAdsListRequest withQueryParams(DfareportingAdsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingAdsListSecurity security;
    public DfareportingAdsListRequest withSecurity(DfareportingAdsListSecurity security) {
        this.security = security;
        return this;
    }
}