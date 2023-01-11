package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsInstancesPatchRequest {
    public MemcacheProjectsLocationsInstancesPatchPathParams pathParams;
    public MemcacheProjectsLocationsInstancesPatchRequest withPathParams(MemcacheProjectsLocationsInstancesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MemcacheProjectsLocationsInstancesPatchQueryParams queryParams;
    public MemcacheProjectsLocationsInstancesPatchRequest withQueryParams(MemcacheProjectsLocationsInstancesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstanceInput request;
    public MemcacheProjectsLocationsInstancesPatchRequest withRequest(openapisdk.models.shared.InstanceInput request) {
        this.request = request;
        return this;
    }
    public MemcacheProjectsLocationsInstancesPatchSecurity security;
    public MemcacheProjectsLocationsInstancesPatchRequest withSecurity(MemcacheProjectsLocationsInstancesPatchSecurity security) {
        this.security = security;
        return this;
    }
}