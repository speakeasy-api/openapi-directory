package openapisdk.models.operations;



public class VmmigrationProjectsLocationsSourcesListRequest {
    public VmmigrationProjectsLocationsSourcesListPathParams pathParams;
    public VmmigrationProjectsLocationsSourcesListRequest withPathParams(VmmigrationProjectsLocationsSourcesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesListQueryParams queryParams;
    public VmmigrationProjectsLocationsSourcesListRequest withQueryParams(VmmigrationProjectsLocationsSourcesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesListSecurity security;
    public VmmigrationProjectsLocationsSourcesListRequest withSecurity(VmmigrationProjectsLocationsSourcesListSecurity security) {
        this.security = security;
        return this;
    }
}