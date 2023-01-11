package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsInstancesCreateRequest {
    public BaremetalsolutionProjectsLocationsInstancesCreatePathParams pathParams;
    public BaremetalsolutionProjectsLocationsInstancesCreateRequest withPathParams(BaremetalsolutionProjectsLocationsInstancesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionProjectsLocationsInstancesCreateQueryParams queryParams;
    public BaremetalsolutionProjectsLocationsInstancesCreateRequest withQueryParams(BaremetalsolutionProjectsLocationsInstancesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstanceInput request;
    public BaremetalsolutionProjectsLocationsInstancesCreateRequest withRequest(openapisdk.models.shared.InstanceInput request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionProjectsLocationsInstancesCreateSecurity security;
    public BaremetalsolutionProjectsLocationsInstancesCreateRequest withSecurity(BaremetalsolutionProjectsLocationsInstancesCreateSecurity security) {
        this.security = security;
        return this;
    }
}