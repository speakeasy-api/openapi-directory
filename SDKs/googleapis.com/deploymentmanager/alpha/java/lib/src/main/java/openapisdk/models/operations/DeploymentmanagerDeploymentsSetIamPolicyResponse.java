package openapisdk.models.operations;



public class DeploymentmanagerDeploymentsSetIamPolicyResponse {
    public String contentType;
    public DeploymentmanagerDeploymentsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public DeploymentmanagerDeploymentsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerDeploymentsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}