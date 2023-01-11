package openapisdk.models.operations;



public class AppengineAppsServicesVersionsInstancesListRequest {
    public AppengineAppsServicesVersionsInstancesListPathParams pathParams;
    public AppengineAppsServicesVersionsInstancesListRequest withPathParams(AppengineAppsServicesVersionsInstancesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsServicesVersionsInstancesListQueryParams queryParams;
    public AppengineAppsServicesVersionsInstancesListRequest withQueryParams(AppengineAppsServicesVersionsInstancesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppengineAppsServicesVersionsInstancesListSecurity security;
    public AppengineAppsServicesVersionsInstancesListRequest withSecurity(AppengineAppsServicesVersionsInstancesListSecurity security) {
        this.security = security;
        return this;
    }
}