package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest {
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreatePathParams pathParams;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withPathParams(VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateQueryParams queryParams;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withQueryParams(VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CutoverJobInput request;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withRequest(openapisdk.models.shared.CutoverJobInput request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateSecurity security;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest withSecurity(VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateSecurity security) {
        this.security = security;
        return this;
    }
}