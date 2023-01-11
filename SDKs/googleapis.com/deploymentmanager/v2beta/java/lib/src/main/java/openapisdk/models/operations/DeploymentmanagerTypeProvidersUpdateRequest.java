package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerTypeProvidersUpdateRequest {
    public DeploymentmanagerTypeProvidersUpdatePathParams pathParams;
    public DeploymentmanagerTypeProvidersUpdateRequest withPathParams(DeploymentmanagerTypeProvidersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerTypeProvidersUpdateQueryParams queryParams;
    public DeploymentmanagerTypeProvidersUpdateRequest withQueryParams(DeploymentmanagerTypeProvidersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TypeProvider request;
    public DeploymentmanagerTypeProvidersUpdateRequest withRequest(openapisdk.models.shared.TypeProvider request) {
        this.request = request;
        return this;
    }
    public DeploymentmanagerTypeProvidersUpdateSecurity security;
    public DeploymentmanagerTypeProvidersUpdateRequest withSecurity(DeploymentmanagerTypeProvidersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}