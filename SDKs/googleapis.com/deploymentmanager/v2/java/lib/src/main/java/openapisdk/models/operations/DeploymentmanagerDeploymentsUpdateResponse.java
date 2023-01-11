package openapisdk.models.operations;



public class DeploymentmanagerDeploymentsUpdateResponse {
    public String contentType;
    public DeploymentmanagerDeploymentsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public DeploymentmanagerDeploymentsUpdateResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerDeploymentsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}