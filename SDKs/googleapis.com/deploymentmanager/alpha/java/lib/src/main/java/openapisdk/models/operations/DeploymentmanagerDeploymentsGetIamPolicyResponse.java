package openapisdk.models.operations;



public class DeploymentmanagerDeploymentsGetIamPolicyResponse {
    public String contentType;
    public DeploymentmanagerDeploymentsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public DeploymentmanagerDeploymentsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerDeploymentsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}