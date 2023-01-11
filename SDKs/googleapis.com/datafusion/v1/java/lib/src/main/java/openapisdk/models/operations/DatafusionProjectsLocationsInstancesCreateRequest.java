package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesCreateRequest {
    public DatafusionProjectsLocationsInstancesCreatePathParams pathParams;
    public DatafusionProjectsLocationsInstancesCreateRequest withPathParams(DatafusionProjectsLocationsInstancesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatafusionProjectsLocationsInstancesCreateQueryParams queryParams;
    public DatafusionProjectsLocationsInstancesCreateRequest withQueryParams(DatafusionProjectsLocationsInstancesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstanceInput request;
    public DatafusionProjectsLocationsInstancesCreateRequest withRequest(openapisdk.models.shared.InstanceInput request) {
        this.request = request;
        return this;
    }
    public DatafusionProjectsLocationsInstancesCreateSecurity security;
    public DatafusionProjectsLocationsInstancesCreateRequest withSecurity(DatafusionProjectsLocationsInstancesCreateSecurity security) {
        this.security = security;
        return this;
    }
}