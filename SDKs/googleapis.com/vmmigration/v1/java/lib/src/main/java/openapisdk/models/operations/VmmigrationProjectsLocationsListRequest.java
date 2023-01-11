package openapisdk.models.operations;



public class VmmigrationProjectsLocationsListRequest {
    public VmmigrationProjectsLocationsListPathParams pathParams;
    public VmmigrationProjectsLocationsListRequest withPathParams(VmmigrationProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsListQueryParams queryParams;
    public VmmigrationProjectsLocationsListRequest withQueryParams(VmmigrationProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VmmigrationProjectsLocationsListSecurity security;
    public VmmigrationProjectsLocationsListRequest withSecurity(VmmigrationProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}