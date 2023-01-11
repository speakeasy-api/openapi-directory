package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsTargetProjectsPatchRequest {
    public VmmigrationProjectsLocationsTargetProjectsPatchPathParams pathParams;
    public VmmigrationProjectsLocationsTargetProjectsPatchRequest withPathParams(VmmigrationProjectsLocationsTargetProjectsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsTargetProjectsPatchQueryParams queryParams;
    public VmmigrationProjectsLocationsTargetProjectsPatchRequest withQueryParams(VmmigrationProjectsLocationsTargetProjectsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TargetProjectInput request;
    public VmmigrationProjectsLocationsTargetProjectsPatchRequest withRequest(openapisdk.models.shared.TargetProjectInput request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsTargetProjectsPatchSecurity security;
    public VmmigrationProjectsLocationsTargetProjectsPatchRequest withSecurity(VmmigrationProjectsLocationsTargetProjectsPatchSecurity security) {
        this.security = security;
        return this;
    }
}