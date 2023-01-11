package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisCreateRequest {
    public ApigeeregistryProjectsLocationsApisCreatePathParams pathParams;
    public ApigeeregistryProjectsLocationsApisCreateRequest withPathParams(ApigeeregistryProjectsLocationsApisCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisCreateQueryParams queryParams;
    public ApigeeregistryProjectsLocationsApisCreateRequest withQueryParams(ApigeeregistryProjectsLocationsApisCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApiInput request;
    public ApigeeregistryProjectsLocationsApisCreateRequest withRequest(openapisdk.models.shared.ApiInput request) {
        this.request = request;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisCreateSecurity security;
    public ApigeeregistryProjectsLocationsApisCreateRequest withSecurity(ApigeeregistryProjectsLocationsApisCreateSecurity security) {
        this.security = security;
        return this;
    }
}