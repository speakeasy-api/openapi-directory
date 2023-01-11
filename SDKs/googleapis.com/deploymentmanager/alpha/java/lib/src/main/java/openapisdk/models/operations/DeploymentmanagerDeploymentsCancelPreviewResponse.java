package openapisdk.models.operations;



public class DeploymentmanagerDeploymentsCancelPreviewResponse {
    public String contentType;
    public DeploymentmanagerDeploymentsCancelPreviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public DeploymentmanagerDeploymentsCancelPreviewResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerDeploymentsCancelPreviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}