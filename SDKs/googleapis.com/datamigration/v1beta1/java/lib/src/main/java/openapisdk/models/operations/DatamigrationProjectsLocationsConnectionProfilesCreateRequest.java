package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsConnectionProfilesCreateRequest {
    public DatamigrationProjectsLocationsConnectionProfilesCreatePathParams pathParams;
    public DatamigrationProjectsLocationsConnectionProfilesCreateRequest withPathParams(DatamigrationProjectsLocationsConnectionProfilesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams queryParams;
    public DatamigrationProjectsLocationsConnectionProfilesCreateRequest withQueryParams(DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionProfileInput request;
    public DatamigrationProjectsLocationsConnectionProfilesCreateRequest withRequest(openapisdk.models.shared.ConnectionProfileInput request) {
        this.request = request;
        return this;
    }
    public DatamigrationProjectsLocationsConnectionProfilesCreateSecurity security;
    public DatamigrationProjectsLocationsConnectionProfilesCreateRequest withSecurity(DatamigrationProjectsLocationsConnectionProfilesCreateSecurity security) {
        this.security = security;
        return this;
    }
}