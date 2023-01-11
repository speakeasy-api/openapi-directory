package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsTargetProjectsCreateRequest {
    public VmmigrationProjectsLocationsTargetProjectsCreatePathParams pathParams;
    public VmmigrationProjectsLocationsTargetProjectsCreateRequest withPathParams(VmmigrationProjectsLocationsTargetProjectsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsTargetProjectsCreateQueryParams queryParams;
    public VmmigrationProjectsLocationsTargetProjectsCreateRequest withQueryParams(VmmigrationProjectsLocationsTargetProjectsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TargetProjectInput request;
    public VmmigrationProjectsLocationsTargetProjectsCreateRequest withRequest(openapisdk.models.shared.TargetProjectInput request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsTargetProjectsCreateSecurity security;
    public VmmigrationProjectsLocationsTargetProjectsCreateRequest withSecurity(VmmigrationProjectsLocationsTargetProjectsCreateSecurity security) {
        this.security = security;
        return this;
    }
}