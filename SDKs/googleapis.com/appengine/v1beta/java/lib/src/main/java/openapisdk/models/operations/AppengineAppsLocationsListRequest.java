package openapisdk.models.operations;



public class AppengineAppsLocationsListRequest {
    public AppengineAppsLocationsListPathParams pathParams;
    public AppengineAppsLocationsListRequest withPathParams(AppengineAppsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsLocationsListQueryParams queryParams;
    public AppengineAppsLocationsListRequest withQueryParams(AppengineAppsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppengineAppsLocationsListSecurity security;
    public AppengineAppsLocationsListRequest withSecurity(AppengineAppsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}