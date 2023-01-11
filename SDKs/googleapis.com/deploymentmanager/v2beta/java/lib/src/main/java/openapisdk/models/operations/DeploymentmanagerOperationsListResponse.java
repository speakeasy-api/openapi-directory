package openapisdk.models.operations;



public class DeploymentmanagerOperationsListResponse {
    public String contentType;
    public DeploymentmanagerOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OperationsListResponse operationsListResponse;
    public DeploymentmanagerOperationsListResponse withOperationsListResponse(openapisdk.models.shared.OperationsListResponse operationsListResponse) {
        this.operationsListResponse = operationsListResponse;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}