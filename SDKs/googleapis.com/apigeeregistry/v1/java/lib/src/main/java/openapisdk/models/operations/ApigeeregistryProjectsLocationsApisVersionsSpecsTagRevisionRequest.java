package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest {
    public ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionPathParams pathParams;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest withPathParams(ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams queryParams;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest withQueryParams(ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagApiSpecRevisionRequest request;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest withRequest(openapisdk.models.shared.TagApiSpecRevisionRequest request) {
        this.request = request;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity security;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest withSecurity(ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity security) {
        this.security = security;
        return this;
    }
}