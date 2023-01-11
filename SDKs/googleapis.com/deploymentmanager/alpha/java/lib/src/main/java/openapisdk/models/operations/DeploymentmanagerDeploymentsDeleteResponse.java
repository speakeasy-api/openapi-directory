package openapisdk.models.operations;



public class DeploymentmanagerDeploymentsDeleteResponse {
    public String contentType;
    public DeploymentmanagerDeploymentsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public DeploymentmanagerDeploymentsDeleteResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerDeploymentsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}