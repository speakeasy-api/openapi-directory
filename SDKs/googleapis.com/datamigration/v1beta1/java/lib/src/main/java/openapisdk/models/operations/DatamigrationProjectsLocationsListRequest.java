package openapisdk.models.operations;



public class DatamigrationProjectsLocationsListRequest {
    public DatamigrationProjectsLocationsListPathParams pathParams;
    public DatamigrationProjectsLocationsListRequest withPathParams(DatamigrationProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatamigrationProjectsLocationsListQueryParams queryParams;
    public DatamigrationProjectsLocationsListRequest withQueryParams(DatamigrationProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatamigrationProjectsLocationsListSecurity security;
    public DatamigrationProjectsLocationsListRequest withSecurity(DatamigrationProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}