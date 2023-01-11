package openapisdk.models.operations;



public class DeploymentmanagerDeploymentsStopResponse {
    public String contentType;
    public DeploymentmanagerDeploymentsStopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public DeploymentmanagerDeploymentsStopResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerDeploymentsStopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}