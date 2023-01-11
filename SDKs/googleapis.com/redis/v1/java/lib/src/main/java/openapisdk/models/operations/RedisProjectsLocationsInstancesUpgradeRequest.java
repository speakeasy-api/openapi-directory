package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RedisProjectsLocationsInstancesUpgradeRequest {
    public RedisProjectsLocationsInstancesUpgradePathParams pathParams;
    public RedisProjectsLocationsInstancesUpgradeRequest withPathParams(RedisProjectsLocationsInstancesUpgradePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RedisProjectsLocationsInstancesUpgradeQueryParams queryParams;
    public RedisProjectsLocationsInstancesUpgradeRequest withQueryParams(RedisProjectsLocationsInstancesUpgradeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpgradeInstanceRequest request;
    public RedisProjectsLocationsInstancesUpgradeRequest withRequest(openapisdk.models.shared.UpgradeInstanceRequest request) {
        this.request = request;
        return this;
    }
    public RedisProjectsLocationsInstancesUpgradeSecurity security;
    public RedisProjectsLocationsInstancesUpgradeRequest withSecurity(RedisProjectsLocationsInstancesUpgradeSecurity security) {
        this.security = security;
        return this;
    }
}