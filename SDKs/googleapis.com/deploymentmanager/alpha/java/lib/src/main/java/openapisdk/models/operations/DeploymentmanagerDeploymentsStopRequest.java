package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsStopRequest {
    public DeploymentmanagerDeploymentsStopPathParams pathParams;
    public DeploymentmanagerDeploymentsStopRequest withPathParams(DeploymentmanagerDeploymentsStopPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerDeploymentsStopQueryParams queryParams;
    public DeploymentmanagerDeploymentsStopRequest withQueryParams(DeploymentmanagerDeploymentsStopQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeploymentsStopRequest request;
    public DeploymentmanagerDeploymentsStopRequest withRequest(openapisdk.models.shared.DeploymentsStopRequest request) {
        this.request = request;
        return this;
    }
    public DeploymentmanagerDeploymentsStopSecurity security;
    public DeploymentmanagerDeploymentsStopRequest withSecurity(DeploymentmanagerDeploymentsStopSecurity security) {
        this.security = security;
        return this;
    }
}