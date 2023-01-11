package openapisdk.models.operations;



public class AppengineAppsOperationsListRequest {
    public AppengineAppsOperationsListPathParams pathParams;
    public AppengineAppsOperationsListRequest withPathParams(AppengineAppsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsOperationsListQueryParams queryParams;
    public AppengineAppsOperationsListRequest withQueryParams(AppengineAppsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppengineAppsOperationsListSecurity security;
    public AppengineAppsOperationsListRequest withSecurity(AppengineAppsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}