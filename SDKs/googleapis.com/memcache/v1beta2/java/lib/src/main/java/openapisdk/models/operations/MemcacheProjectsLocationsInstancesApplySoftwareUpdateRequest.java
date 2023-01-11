package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsInstancesApplySoftwareUpdateRequest {
    public MemcacheProjectsLocationsInstancesApplySoftwareUpdatePathParams pathParams;
    public MemcacheProjectsLocationsInstancesApplySoftwareUpdateRequest withPathParams(MemcacheProjectsLocationsInstancesApplySoftwareUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MemcacheProjectsLocationsInstancesApplySoftwareUpdateQueryParams queryParams;
    public MemcacheProjectsLocationsInstancesApplySoftwareUpdateRequest withQueryParams(MemcacheProjectsLocationsInstancesApplySoftwareUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplySoftwareUpdateRequest request;
    public MemcacheProjectsLocationsInstancesApplySoftwareUpdateRequest withRequest(openapisdk.models.shared.ApplySoftwareUpdateRequest request) {
        this.request = request;
        return this;
    }
    public MemcacheProjectsLocationsInstancesApplySoftwareUpdateSecurity security;
    public MemcacheProjectsLocationsInstancesApplySoftwareUpdateRequest withSecurity(MemcacheProjectsLocationsInstancesApplySoftwareUpdateSecurity security) {
        this.security = security;
        return this;
    }
}