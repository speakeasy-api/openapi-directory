package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest {
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelPathParams pathParams;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest withPathParams(VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelQueryParams queryParams;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest withQueryParams(VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelSecurity security;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest withSecurity(VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelSecurity security) {
        this.security = security;
        return this;
    }
}