package openapisdk.models.operations;



public class DeploymentmanagerDeploymentsGetResponse {
    public String contentType;
    public DeploymentmanagerDeploymentsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Deployment deployment;
    public DeploymentmanagerDeploymentsGetResponse withDeployment(openapisdk.models.shared.Deployment deployment) {
        this.deployment = deployment;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerDeploymentsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}