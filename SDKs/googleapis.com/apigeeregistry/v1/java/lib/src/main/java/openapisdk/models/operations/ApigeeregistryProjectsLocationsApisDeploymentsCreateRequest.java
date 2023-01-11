package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisDeploymentsCreateRequest {
    public ApigeeregistryProjectsLocationsApisDeploymentsCreatePathParams pathParams;
    public ApigeeregistryProjectsLocationsApisDeploymentsCreateRequest withPathParams(ApigeeregistryProjectsLocationsApisDeploymentsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisDeploymentsCreateQueryParams queryParams;
    public ApigeeregistryProjectsLocationsApisDeploymentsCreateRequest withQueryParams(ApigeeregistryProjectsLocationsApisDeploymentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApiDeploymentInput request;
    public ApigeeregistryProjectsLocationsApisDeploymentsCreateRequest withRequest(openapisdk.models.shared.ApiDeploymentInput request) {
        this.request = request;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisDeploymentsCreateSecurity security;
    public ApigeeregistryProjectsLocationsApisDeploymentsCreateRequest withSecurity(ApigeeregistryProjectsLocationsApisDeploymentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}