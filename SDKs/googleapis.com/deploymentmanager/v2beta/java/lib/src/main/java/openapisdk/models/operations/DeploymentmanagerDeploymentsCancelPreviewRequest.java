package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsCancelPreviewRequest {
    public DeploymentmanagerDeploymentsCancelPreviewPathParams pathParams;
    public DeploymentmanagerDeploymentsCancelPreviewRequest withPathParams(DeploymentmanagerDeploymentsCancelPreviewPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerDeploymentsCancelPreviewQueryParams queryParams;
    public DeploymentmanagerDeploymentsCancelPreviewRequest withQueryParams(DeploymentmanagerDeploymentsCancelPreviewQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeploymentsCancelPreviewRequest request;
    public DeploymentmanagerDeploymentsCancelPreviewRequest withRequest(openapisdk.models.shared.DeploymentsCancelPreviewRequest request) {
        this.request = request;
        return this;
    }
    public DeploymentmanagerDeploymentsCancelPreviewSecurity security;
    public DeploymentmanagerDeploymentsCancelPreviewRequest withSecurity(DeploymentmanagerDeploymentsCancelPreviewSecurity security) {
        this.security = security;
        return this;
    }
}