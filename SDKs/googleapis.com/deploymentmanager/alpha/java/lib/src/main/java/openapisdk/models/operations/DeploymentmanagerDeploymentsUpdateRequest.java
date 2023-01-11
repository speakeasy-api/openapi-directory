package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsUpdateRequest {
    public DeploymentmanagerDeploymentsUpdatePathParams pathParams;
    public DeploymentmanagerDeploymentsUpdateRequest withPathParams(DeploymentmanagerDeploymentsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerDeploymentsUpdateQueryParams queryParams;
    public DeploymentmanagerDeploymentsUpdateRequest withQueryParams(DeploymentmanagerDeploymentsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Deployment request;
    public DeploymentmanagerDeploymentsUpdateRequest withRequest(openapisdk.models.shared.Deployment request) {
        this.request = request;
        return this;
    }
    public DeploymentmanagerDeploymentsUpdateSecurity security;
    public DeploymentmanagerDeploymentsUpdateRequest withSecurity(DeploymentmanagerDeploymentsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}