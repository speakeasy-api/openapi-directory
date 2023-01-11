package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest {
    public ApigeeregistryProjectsLocationsApisVersionsSpecsCreatePathParams pathParams;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest withPathParams(ApigeeregistryProjectsLocationsApisVersionsSpecsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams queryParams;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest withQueryParams(ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApiSpecInput request;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest withRequest(openapisdk.models.shared.ApiSpecInput request) {
        this.request = request;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity security;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest withSecurity(ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity security) {
        this.security = security;
        return this;
    }
}