package openapisdk.models.operations;



public class DfareportingMobileAppsListRequest {
    public DfareportingMobileAppsListPathParams pathParams;
    public DfareportingMobileAppsListRequest withPathParams(DfareportingMobileAppsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingMobileAppsListQueryParams queryParams;
    public DfareportingMobileAppsListRequest withQueryParams(DfareportingMobileAppsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingMobileAppsListSecurity security;
    public DfareportingMobileAppsListRequest withSecurity(DfareportingMobileAppsListSecurity security) {
        this.security = security;
        return this;
    }
}