package openapisdk.models.operations;



public class AppengineAppsServicesVersionsListRequest {
    public AppengineAppsServicesVersionsListPathParams pathParams;
    public AppengineAppsServicesVersionsListRequest withPathParams(AppengineAppsServicesVersionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsServicesVersionsListQueryParams queryParams;
    public AppengineAppsServicesVersionsListRequest withQueryParams(AppengineAppsServicesVersionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppengineAppsServicesVersionsListSecurity security;
    public AppengineAppsServicesVersionsListRequest withSecurity(AppengineAppsServicesVersionsListSecurity security) {
        this.security = security;
        return this;
    }
}