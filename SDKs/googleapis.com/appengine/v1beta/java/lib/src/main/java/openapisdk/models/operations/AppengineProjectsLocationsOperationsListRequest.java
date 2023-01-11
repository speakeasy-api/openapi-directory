package openapisdk.models.operations;



public class AppengineProjectsLocationsOperationsListRequest {
    public AppengineProjectsLocationsOperationsListPathParams pathParams;
    public AppengineProjectsLocationsOperationsListRequest withPathParams(AppengineProjectsLocationsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineProjectsLocationsOperationsListQueryParams queryParams;
    public AppengineProjectsLocationsOperationsListRequest withQueryParams(AppengineProjectsLocationsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppengineProjectsLocationsOperationsListSecurity security;
    public AppengineProjectsLocationsOperationsListRequest withSecurity(AppengineProjectsLocationsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}