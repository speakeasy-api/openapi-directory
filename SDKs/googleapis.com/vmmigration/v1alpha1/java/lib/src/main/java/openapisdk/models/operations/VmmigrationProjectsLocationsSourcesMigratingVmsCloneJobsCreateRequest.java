package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest {
    public VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreatePathParams pathParams;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest withPathParams(VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateQueryParams queryParams;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest withQueryParams(VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CloneJobInput request;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest withRequest(openapisdk.models.shared.CloneJobInput request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateSecurity security;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest withSecurity(VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateSecurity security) {
        this.security = security;
        return this;
    }
}