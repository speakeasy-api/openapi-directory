package openapisdk.models.operations;



public class AppengineAppsServicesGetRequest {
    public AppengineAppsServicesGetPathParams pathParams;
    public AppengineAppsServicesGetRequest withPathParams(AppengineAppsServicesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsServicesGetQueryParams queryParams;
    public AppengineAppsServicesGetRequest withQueryParams(AppengineAppsServicesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppengineAppsServicesGetSecurity security;
    public AppengineAppsServicesGetRequest withSecurity(AppengineAppsServicesGetSecurity security) {
        this.security = security;
        return this;
    }
}