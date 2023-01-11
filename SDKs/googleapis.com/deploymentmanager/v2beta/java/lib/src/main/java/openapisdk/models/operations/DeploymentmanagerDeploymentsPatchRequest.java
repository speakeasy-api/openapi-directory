package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsPatchRequest {
    public DeploymentmanagerDeploymentsPatchPathParams pathParams;
    public DeploymentmanagerDeploymentsPatchRequest withPathParams(DeploymentmanagerDeploymentsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerDeploymentsPatchQueryParams queryParams;
    public DeploymentmanagerDeploymentsPatchRequest withQueryParams(DeploymentmanagerDeploymentsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Deployment request;
    public DeploymentmanagerDeploymentsPatchRequest withRequest(openapisdk.models.shared.Deployment request) {
        this.request = request;
        return this;
    }
    public DeploymentmanagerDeploymentsPatchSecurity security;
    public DeploymentmanagerDeploymentsPatchRequest withSecurity(DeploymentmanagerDeploymentsPatchSecurity security) {
        this.security = security;
        return this;
    }
}