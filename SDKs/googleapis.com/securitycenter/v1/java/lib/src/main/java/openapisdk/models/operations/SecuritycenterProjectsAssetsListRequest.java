package openapisdk.models.operations;



public class SecuritycenterProjectsAssetsListRequest {
    public SecuritycenterProjectsAssetsListPathParams pathParams;
    public SecuritycenterProjectsAssetsListRequest withPathParams(SecuritycenterProjectsAssetsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterProjectsAssetsListQueryParams queryParams;
    public SecuritycenterProjectsAssetsListRequest withQueryParams(SecuritycenterProjectsAssetsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SecuritycenterProjectsAssetsListSecurity security;
    public SecuritycenterProjectsAssetsListRequest withSecurity(SecuritycenterProjectsAssetsListSecurity security) {
        this.security = security;
        return this;
    }
}