package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerTypeProvidersPatchRequest {
    public DeploymentmanagerTypeProvidersPatchPathParams pathParams;
    public DeploymentmanagerTypeProvidersPatchRequest withPathParams(DeploymentmanagerTypeProvidersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerTypeProvidersPatchQueryParams queryParams;
    public DeploymentmanagerTypeProvidersPatchRequest withQueryParams(DeploymentmanagerTypeProvidersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TypeProvider request;
    public DeploymentmanagerTypeProvidersPatchRequest withRequest(openapisdk.models.shared.TypeProvider request) {
        this.request = request;
        return this;
    }
    public DeploymentmanagerTypeProvidersPatchSecurity security;
    public DeploymentmanagerTypeProvidersPatchRequest withSecurity(DeploymentmanagerTypeProvidersPatchSecurity security) {
        this.security = security;
        return this;
    }
}