package openapisdk.models.operations;



public class AdsenseAccountsSitesListRequest {
    public AdsenseAccountsSitesListPathParams pathParams;
    public AdsenseAccountsSitesListRequest withPathParams(AdsenseAccountsSitesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdsenseAccountsSitesListQueryParams queryParams;
    public AdsenseAccountsSitesListRequest withQueryParams(AdsenseAccountsSitesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdsenseAccountsSitesListSecurity security;
    public AdsenseAccountsSitesListRequest withSecurity(AdsenseAccountsSitesListSecurity security) {
        this.security = security;
        return this;
    }
}