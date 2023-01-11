package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsInstancesUpdateParametersRequest {
    public MemcacheProjectsLocationsInstancesUpdateParametersPathParams pathParams;
    public MemcacheProjectsLocationsInstancesUpdateParametersRequest withPathParams(MemcacheProjectsLocationsInstancesUpdateParametersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MemcacheProjectsLocationsInstancesUpdateParametersQueryParams queryParams;
    public MemcacheProjectsLocationsInstancesUpdateParametersRequest withQueryParams(MemcacheProjectsLocationsInstancesUpdateParametersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateParametersRequestInput request;
    public MemcacheProjectsLocationsInstancesUpdateParametersRequest withRequest(openapisdk.models.shared.UpdateParametersRequestInput request) {
        this.request = request;
        return this;
    }
    public MemcacheProjectsLocationsInstancesUpdateParametersSecurity security;
    public MemcacheProjectsLocationsInstancesUpdateParametersRequest withSecurity(MemcacheProjectsLocationsInstancesUpdateParametersSecurity security) {
        this.security = security;
        return this;
    }
}