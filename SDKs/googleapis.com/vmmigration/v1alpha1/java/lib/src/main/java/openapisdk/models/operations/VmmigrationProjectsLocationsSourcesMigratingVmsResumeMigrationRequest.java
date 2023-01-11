package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest {
    public VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationPathParams pathParams;
    public VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest withPathParams(VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationQueryParams queryParams;
    public VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest withQueryParams(VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationSecurity security;
    public VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest withSecurity(VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationSecurity security) {
        this.security = security;
        return this;
    }
}