package openapisdk.models.operations;



public class VmmigrationProjectsLocationsGroupsListRequest {
    public VmmigrationProjectsLocationsGroupsListPathParams pathParams;
    public VmmigrationProjectsLocationsGroupsListRequest withPathParams(VmmigrationProjectsLocationsGroupsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsGroupsListQueryParams queryParams;
    public VmmigrationProjectsLocationsGroupsListRequest withQueryParams(VmmigrationProjectsLocationsGroupsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VmmigrationProjectsLocationsGroupsListSecurity security;
    public VmmigrationProjectsLocationsGroupsListRequest withSecurity(VmmigrationProjectsLocationsGroupsListSecurity security) {
        this.security = security;
        return this;
    }
}