package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RedisProjectsLocationsInstancesCreateRequest {
    public RedisProjectsLocationsInstancesCreatePathParams pathParams;
    public RedisProjectsLocationsInstancesCreateRequest withPathParams(RedisProjectsLocationsInstancesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RedisProjectsLocationsInstancesCreateQueryParams queryParams;
    public RedisProjectsLocationsInstancesCreateRequest withQueryParams(RedisProjectsLocationsInstancesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstanceInput request;
    public RedisProjectsLocationsInstancesCreateRequest withRequest(openapisdk.models.shared.InstanceInput request) {
        this.request = request;
        return this;
    }
    public RedisProjectsLocationsInstancesCreateSecurity security;
    public RedisProjectsLocationsInstancesCreateRequest withSecurity(RedisProjectsLocationsInstancesCreateSecurity security) {
        this.security = security;
        return this;
    }
}