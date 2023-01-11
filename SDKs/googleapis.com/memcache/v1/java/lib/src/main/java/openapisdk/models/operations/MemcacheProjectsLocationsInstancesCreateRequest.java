package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsInstancesCreateRequest {
    public MemcacheProjectsLocationsInstancesCreatePathParams pathParams;
    public MemcacheProjectsLocationsInstancesCreateRequest withPathParams(MemcacheProjectsLocationsInstancesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MemcacheProjectsLocationsInstancesCreateQueryParams queryParams;
    public MemcacheProjectsLocationsInstancesCreateRequest withQueryParams(MemcacheProjectsLocationsInstancesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstanceInput request;
    public MemcacheProjectsLocationsInstancesCreateRequest withRequest(openapisdk.models.shared.InstanceInput request) {
        this.request = request;
        return this;
    }
    public MemcacheProjectsLocationsInstancesCreateSecurity security;
    public MemcacheProjectsLocationsInstancesCreateRequest withSecurity(MemcacheProjectsLocationsInstancesCreateSecurity security) {
        this.security = security;
        return this;
    }
}