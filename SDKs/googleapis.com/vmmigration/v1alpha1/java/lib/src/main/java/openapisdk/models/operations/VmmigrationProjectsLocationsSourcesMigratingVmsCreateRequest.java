package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest {
    public VmmigrationProjectsLocationsSourcesMigratingVmsCreatePathParams pathParams;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest withPathParams(VmmigrationProjectsLocationsSourcesMigratingVmsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesMigratingVmsCreateQueryParams queryParams;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest withQueryParams(VmmigrationProjectsLocationsSourcesMigratingVmsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MigratingVmInput request;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest withRequest(openapisdk.models.shared.MigratingVmInput request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesMigratingVmsCreateSecurity security;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest withSecurity(VmmigrationProjectsLocationsSourcesMigratingVmsCreateSecurity security) {
        this.security = security;
        return this;
    }
}