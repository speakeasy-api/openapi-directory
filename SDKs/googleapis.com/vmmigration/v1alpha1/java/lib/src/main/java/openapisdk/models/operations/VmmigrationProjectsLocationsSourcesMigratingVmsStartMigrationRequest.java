package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest {
    public VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationPathParams pathParams;
    public VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest withPathParams(VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams queryParams;
    public VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest withQueryParams(VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity security;
    public VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest withSecurity(VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity security) {
        this.security = security;
        return this;
    }
}