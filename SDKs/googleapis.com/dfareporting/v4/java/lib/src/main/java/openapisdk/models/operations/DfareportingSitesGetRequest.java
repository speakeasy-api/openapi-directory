package openapisdk.models.operations;



public class DfareportingSitesGetRequest {
    public DfareportingSitesGetPathParams pathParams;
    public DfareportingSitesGetRequest withPathParams(DfareportingSitesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingSitesGetQueryParams queryParams;
    public DfareportingSitesGetRequest withQueryParams(DfareportingSitesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingSitesGetSecurity security;
    public DfareportingSitesGetRequest withSecurity(DfareportingSitesGetSecurity security) {
        this.security = security;
        return this;
    }
}