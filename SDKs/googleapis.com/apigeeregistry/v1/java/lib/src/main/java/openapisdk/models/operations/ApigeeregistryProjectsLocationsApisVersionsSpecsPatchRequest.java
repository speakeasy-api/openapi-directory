package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest {
    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchPathParams pathParams;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withPathParams(ApigeeregistryProjectsLocationsApisVersionsSpecsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchQueryParams queryParams;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withQueryParams(ApigeeregistryProjectsLocationsApisVersionsSpecsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApiSpecInput request;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withRequest(openapisdk.models.shared.ApiSpecInput request) {
        this.request = request;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchSecurity security;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest withSecurity(ApigeeregistryProjectsLocationsApisVersionsSpecsPatchSecurity security) {
        this.security = security;
        return this;
    }
}