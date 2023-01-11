package openapisdk.models.operations;



public class AppengineAppsServicesListRequest {
    public AppengineAppsServicesListPathParams pathParams;
    public AppengineAppsServicesListRequest withPathParams(AppengineAppsServicesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsServicesListQueryParams queryParams;
    public AppengineAppsServicesListRequest withQueryParams(AppengineAppsServicesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppengineAppsServicesListSecurity security;
    public AppengineAppsServicesListRequest withSecurity(AppengineAppsServicesListSecurity security) {
        this.security = security;
        return this;
    }
}