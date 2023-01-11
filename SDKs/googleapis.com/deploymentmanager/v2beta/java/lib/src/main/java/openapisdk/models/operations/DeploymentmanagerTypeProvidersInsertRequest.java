package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerTypeProvidersInsertRequest {
    public DeploymentmanagerTypeProvidersInsertPathParams pathParams;
    public DeploymentmanagerTypeProvidersInsertRequest withPathParams(DeploymentmanagerTypeProvidersInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerTypeProvidersInsertQueryParams queryParams;
    public DeploymentmanagerTypeProvidersInsertRequest withQueryParams(DeploymentmanagerTypeProvidersInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TypeProvider request;
    public DeploymentmanagerTypeProvidersInsertRequest withRequest(openapisdk.models.shared.TypeProvider request) {
        this.request = request;
        return this;
    }
    public DeploymentmanagerTypeProvidersInsertSecurity security;
    public DeploymentmanagerTypeProvidersInsertRequest withSecurity(DeploymentmanagerTypeProvidersInsertSecurity security) {
        this.security = security;
        return this;
    }
}