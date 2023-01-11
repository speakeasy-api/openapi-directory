package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesRestartRequest {
    public DatafusionProjectsLocationsInstancesRestartPathParams pathParams;
    public DatafusionProjectsLocationsInstancesRestartRequest withPathParams(DatafusionProjectsLocationsInstancesRestartPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatafusionProjectsLocationsInstancesRestartQueryParams queryParams;
    public DatafusionProjectsLocationsInstancesRestartRequest withQueryParams(DatafusionProjectsLocationsInstancesRestartQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DatafusionProjectsLocationsInstancesRestartRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DatafusionProjectsLocationsInstancesRestartSecurity security;
    public DatafusionProjectsLocationsInstancesRestartRequest withSecurity(DatafusionProjectsLocationsInstancesRestartSecurity security) {
        this.security = security;
        return this;
    }
}