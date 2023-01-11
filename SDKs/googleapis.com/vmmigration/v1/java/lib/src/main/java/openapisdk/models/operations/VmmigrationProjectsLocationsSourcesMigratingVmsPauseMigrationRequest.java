package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest {
    public VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams pathParams;
    public VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest withPathParams(VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams queryParams;
    public VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest withQueryParams(VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity security;
    public VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest withSecurity(VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity security) {
        this.security = security;
        return this;
    }
}