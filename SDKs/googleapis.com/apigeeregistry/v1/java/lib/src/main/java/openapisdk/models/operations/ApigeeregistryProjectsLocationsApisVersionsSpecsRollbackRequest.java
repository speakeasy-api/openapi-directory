package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackRequest {
    public ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackPathParams pathParams;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackRequest withPathParams(ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackQueryParams queryParams;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackRequest withQueryParams(ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RollbackApiSpecRequest request;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackRequest withRequest(openapisdk.models.shared.RollbackApiSpecRequest request) {
        this.request = request;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackSecurity security;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackRequest withSecurity(ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackSecurity security) {
        this.security = security;
        return this;
    }
}