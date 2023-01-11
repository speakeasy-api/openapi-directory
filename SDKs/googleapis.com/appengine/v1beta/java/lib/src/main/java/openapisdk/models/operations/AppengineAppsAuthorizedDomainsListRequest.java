package openapisdk.models.operations;



public class AppengineAppsAuthorizedDomainsListRequest {
    public AppengineAppsAuthorizedDomainsListPathParams pathParams;
    public AppengineAppsAuthorizedDomainsListRequest withPathParams(AppengineAppsAuthorizedDomainsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsAuthorizedDomainsListQueryParams queryParams;
    public AppengineAppsAuthorizedDomainsListRequest withQueryParams(AppengineAppsAuthorizedDomainsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppengineAppsAuthorizedDomainsListSecurity security;
    public AppengineAppsAuthorizedDomainsListRequest withSecurity(AppengineAppsAuthorizedDomainsListSecurity security) {
        this.security = security;
        return this;
    }
}