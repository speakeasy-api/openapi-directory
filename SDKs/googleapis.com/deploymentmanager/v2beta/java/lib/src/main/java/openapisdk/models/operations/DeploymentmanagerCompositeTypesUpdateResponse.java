package openapisdk.models.operations;



public class DeploymentmanagerCompositeTypesUpdateResponse {
    public String contentType;
    public DeploymentmanagerCompositeTypesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public DeploymentmanagerCompositeTypesUpdateResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerCompositeTypesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}