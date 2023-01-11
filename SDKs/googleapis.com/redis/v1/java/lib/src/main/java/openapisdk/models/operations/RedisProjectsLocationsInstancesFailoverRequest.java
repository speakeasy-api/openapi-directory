package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RedisProjectsLocationsInstancesFailoverRequest {
    public RedisProjectsLocationsInstancesFailoverPathParams pathParams;
    public RedisProjectsLocationsInstancesFailoverRequest withPathParams(RedisProjectsLocationsInstancesFailoverPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RedisProjectsLocationsInstancesFailoverQueryParams queryParams;
    public RedisProjectsLocationsInstancesFailoverRequest withQueryParams(RedisProjectsLocationsInstancesFailoverQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FailoverInstanceRequest request;
    public RedisProjectsLocationsInstancesFailoverRequest withRequest(openapisdk.models.shared.FailoverInstanceRequest request) {
        this.request = request;
        return this;
    }
    public RedisProjectsLocationsInstancesFailoverSecurity security;
    public RedisProjectsLocationsInstancesFailoverRequest withSecurity(RedisProjectsLocationsInstancesFailoverSecurity security) {
        this.security = security;
        return this;
    }
}