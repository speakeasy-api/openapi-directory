package openapisdk.models.operations;



public class AdsenseAccountsSitesGetRequest {
    public AdsenseAccountsSitesGetPathParams pathParams;
    public AdsenseAccountsSitesGetRequest withPathParams(AdsenseAccountsSitesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsenseAccountsSitesGetQueryParams queryParams;
    public AdsenseAccountsSitesGetRequest withQueryParams(AdsenseAccountsSitesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdsenseAccountsSitesGetSecurity security;
    public AdsenseAccountsSitesGetRequest withSecurity(AdsenseAccountsSitesGetSecurity security) {
        this.security = security;
        return this;
    }
}