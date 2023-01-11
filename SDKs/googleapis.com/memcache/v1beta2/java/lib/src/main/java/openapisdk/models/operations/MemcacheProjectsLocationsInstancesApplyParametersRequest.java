package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsInstancesApplyParametersRequest {
    public MemcacheProjectsLocationsInstancesApplyParametersPathParams pathParams;
    public MemcacheProjectsLocationsInstancesApplyParametersRequest withPathParams(MemcacheProjectsLocationsInstancesApplyParametersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MemcacheProjectsLocationsInstancesApplyParametersQueryParams queryParams;
    public MemcacheProjectsLocationsInstancesApplyParametersRequest withQueryParams(MemcacheProjectsLocationsInstancesApplyParametersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplyParametersRequest request;
    public MemcacheProjectsLocationsInstancesApplyParametersRequest withRequest(openapisdk.models.shared.ApplyParametersRequest request) {
        this.request = request;
        return this;
    }
    public MemcacheProjectsLocationsInstancesApplyParametersSecurity security;
    public MemcacheProjectsLocationsInstancesApplyParametersRequest withSecurity(MemcacheProjectsLocationsInstancesApplyParametersSecurity security) {
        this.security = security;
        return this;
    }
}