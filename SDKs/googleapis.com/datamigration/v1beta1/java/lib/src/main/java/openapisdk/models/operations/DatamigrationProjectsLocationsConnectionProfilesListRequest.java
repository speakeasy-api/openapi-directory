package openapisdk.models.operations;



public class DatamigrationProjectsLocationsConnectionProfilesListRequest {
    public DatamigrationProjectsLocationsConnectionProfilesListPathParams pathParams;
    public DatamigrationProjectsLocationsConnectionProfilesListRequest withPathParams(DatamigrationProjectsLocationsConnectionProfilesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatamigrationProjectsLocationsConnectionProfilesListQueryParams queryParams;
    public DatamigrationProjectsLocationsConnectionProfilesListRequest withQueryParams(DatamigrationProjectsLocationsConnectionProfilesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatamigrationProjectsLocationsConnectionProfilesListSecurity security;
    public DatamigrationProjectsLocationsConnectionProfilesListRequest withSecurity(DatamigrationProjectsLocationsConnectionProfilesListSecurity security) {
        this.security = security;
        return this;
    }
}