package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisVersionsCreateRequest {
    public ApigeeregistryProjectsLocationsApisVersionsCreatePathParams pathParams;
    public ApigeeregistryProjectsLocationsApisVersionsCreateRequest withPathParams(ApigeeregistryProjectsLocationsApisVersionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisVersionsCreateQueryParams queryParams;
    public ApigeeregistryProjectsLocationsApisVersionsCreateRequest withQueryParams(ApigeeregistryProjectsLocationsApisVersionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApiVersionInput request;
    public ApigeeregistryProjectsLocationsApisVersionsCreateRequest withRequest(openapisdk.models.shared.ApiVersionInput request) {
        this.request = request;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisVersionsCreateSecurity security;
    public ApigeeregistryProjectsLocationsApisVersionsCreateRequest withSecurity(ApigeeregistryProjectsLocationsApisVersionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}