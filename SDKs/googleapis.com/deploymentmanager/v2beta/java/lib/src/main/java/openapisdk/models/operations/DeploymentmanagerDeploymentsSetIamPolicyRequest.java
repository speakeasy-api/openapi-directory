package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsSetIamPolicyRequest {
    public DeploymentmanagerDeploymentsSetIamPolicyPathParams pathParams;
    public DeploymentmanagerDeploymentsSetIamPolicyRequest withPathParams(DeploymentmanagerDeploymentsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerDeploymentsSetIamPolicyQueryParams queryParams;
    public DeploymentmanagerDeploymentsSetIamPolicyRequest withQueryParams(DeploymentmanagerDeploymentsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GlobalSetPolicyRequest request;
    public DeploymentmanagerDeploymentsSetIamPolicyRequest withRequest(openapisdk.models.shared.GlobalSetPolicyRequest request) {
        this.request = request;
        return this;
    }
    public DeploymentmanagerDeploymentsSetIamPolicySecurity security;
    public DeploymentmanagerDeploymentsSetIamPolicyRequest withSecurity(DeploymentmanagerDeploymentsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}