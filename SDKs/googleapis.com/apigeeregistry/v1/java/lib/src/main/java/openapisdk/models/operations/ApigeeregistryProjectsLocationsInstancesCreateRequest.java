package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsInstancesCreateRequest {
    public ApigeeregistryProjectsLocationsInstancesCreatePathParams pathParams;
    public ApigeeregistryProjectsLocationsInstancesCreateRequest withPathParams(ApigeeregistryProjectsLocationsInstancesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsInstancesCreateQueryParams queryParams;
    public ApigeeregistryProjectsLocationsInstancesCreateRequest withQueryParams(ApigeeregistryProjectsLocationsInstancesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstanceInput request;
    public ApigeeregistryProjectsLocationsInstancesCreateRequest withRequest(openapisdk.models.shared.InstanceInput request) {
        this.request = request;
        return this;
    }
    public ApigeeregistryProjectsLocationsInstancesCreateSecurity security;
    public ApigeeregistryProjectsLocationsInstancesCreateRequest withSecurity(ApigeeregistryProjectsLocationsInstancesCreateSecurity security) {
        this.security = security;
        return this;
    }
}