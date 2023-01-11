package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesPatchRequest {
    public DatafusionProjectsLocationsInstancesPatchPathParams pathParams;
    public DatafusionProjectsLocationsInstancesPatchRequest withPathParams(DatafusionProjectsLocationsInstancesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatafusionProjectsLocationsInstancesPatchQueryParams queryParams;
    public DatafusionProjectsLocationsInstancesPatchRequest withQueryParams(DatafusionProjectsLocationsInstancesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstanceInput request;
    public DatafusionProjectsLocationsInstancesPatchRequest withRequest(openapisdk.models.shared.InstanceInput request) {
        this.request = request;
        return this;
    }
    public DatafusionProjectsLocationsInstancesPatchSecurity security;
    public DatafusionProjectsLocationsInstancesPatchRequest withSecurity(DatafusionProjectsLocationsInstancesPatchSecurity security) {
        this.security = security;
        return this;
    }
}