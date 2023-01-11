package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RedisProjectsLocationsInstancesPatchRequest {
    public RedisProjectsLocationsInstancesPatchPathParams pathParams;
    public RedisProjectsLocationsInstancesPatchRequest withPathParams(RedisProjectsLocationsInstancesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RedisProjectsLocationsInstancesPatchQueryParams queryParams;
    public RedisProjectsLocationsInstancesPatchRequest withQueryParams(RedisProjectsLocationsInstancesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstanceInput request;
    public RedisProjectsLocationsInstancesPatchRequest withRequest(openapisdk.models.shared.InstanceInput request) {
        this.request = request;
        return this;
    }
    public RedisProjectsLocationsInstancesPatchSecurity security;
    public RedisProjectsLocationsInstancesPatchRequest withSecurity(RedisProjectsLocationsInstancesPatchSecurity security) {
        this.security = security;
        return this;
    }
}