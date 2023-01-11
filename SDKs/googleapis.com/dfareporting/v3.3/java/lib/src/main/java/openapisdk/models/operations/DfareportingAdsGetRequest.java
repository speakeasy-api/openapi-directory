package openapisdk.models.operations;



public class DfareportingAdsGetRequest {
    public DfareportingAdsGetPathParams pathParams;
    public DfareportingAdsGetRequest withPathParams(DfareportingAdsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdsGetQueryParams queryParams;
    public DfareportingAdsGetRequest withQueryParams(DfareportingAdsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingAdsGetSecurity security;
    public DfareportingAdsGetRequest withSecurity(DfareportingAdsGetSecurity security) {
        this.security = security;
        return this;
    }
}