package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsTestIamPermissionsRequest {
    public DeploymentmanagerDeploymentsTestIamPermissionsPathParams pathParams;
    public DeploymentmanagerDeploymentsTestIamPermissionsRequest withPathParams(DeploymentmanagerDeploymentsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerDeploymentsTestIamPermissionsQueryParams queryParams;
    public DeploymentmanagerDeploymentsTestIamPermissionsRequest withQueryParams(DeploymentmanagerDeploymentsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestPermissionsRequest request;
    public DeploymentmanagerDeploymentsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public DeploymentmanagerDeploymentsTestIamPermissionsSecurity security;
    public DeploymentmanagerDeploymentsTestIamPermissionsRequest withSecurity(DeploymentmanagerDeploymentsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}