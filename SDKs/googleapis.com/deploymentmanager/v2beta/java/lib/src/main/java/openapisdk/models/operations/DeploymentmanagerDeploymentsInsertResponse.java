package openapisdk.models.operations;



public class DeploymentmanagerDeploymentsInsertResponse {
    public String contentType;
    public DeploymentmanagerDeploymentsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public DeploymentmanagerDeploymentsInsertResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerDeploymentsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}