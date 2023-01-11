package openapisdk.models.operations;



public class AppengineProjectsLocationsListRequest {
    public AppengineProjectsLocationsListPathParams pathParams;
    public AppengineProjectsLocationsListRequest withPathParams(AppengineProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineProjectsLocationsListQueryParams queryParams;
    public AppengineProjectsLocationsListRequest withQueryParams(AppengineProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppengineProjectsLocationsListSecurity security;
    public AppengineProjectsLocationsListRequest withSecurity(AppengineProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}