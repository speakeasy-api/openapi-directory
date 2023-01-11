package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesUpgradeRequest {
    public DatafusionProjectsLocationsInstancesUpgradePathParams pathParams;
    public DatafusionProjectsLocationsInstancesUpgradeRequest withPathParams(DatafusionProjectsLocationsInstancesUpgradePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatafusionProjectsLocationsInstancesUpgradeQueryParams queryParams;
    public DatafusionProjectsLocationsInstancesUpgradeRequest withQueryParams(DatafusionProjectsLocationsInstancesUpgradeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DatafusionProjectsLocationsInstancesUpgradeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DatafusionProjectsLocationsInstancesUpgradeSecurity security;
    public DatafusionProjectsLocationsInstancesUpgradeRequest withSecurity(DatafusionProjectsLocationsInstancesUpgradeSecurity security) {
        this.security = security;
        return this;
    }
}