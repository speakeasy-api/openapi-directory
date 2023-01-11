package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsInsertRequest {
    public DeploymentmanagerDeploymentsInsertPathParams pathParams;
    public DeploymentmanagerDeploymentsInsertRequest withPathParams(DeploymentmanagerDeploymentsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerDeploymentsInsertQueryParams queryParams;
    public DeploymentmanagerDeploymentsInsertRequest withQueryParams(DeploymentmanagerDeploymentsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Deployment request;
    public DeploymentmanagerDeploymentsInsertRequest withRequest(openapisdk.models.shared.Deployment request) {
        this.request = request;
        return this;
    }
    public DeploymentmanagerDeploymentsInsertSecurity security;
    public DeploymentmanagerDeploymentsInsertRequest withSecurity(DeploymentmanagerDeploymentsInsertSecurity security) {
        this.security = security;
        return this;
    }
}