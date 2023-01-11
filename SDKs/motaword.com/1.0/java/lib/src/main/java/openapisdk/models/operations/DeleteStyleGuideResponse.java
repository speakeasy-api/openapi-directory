package openapisdk.models.operations;



public class DeleteStyleGuideResponse {
    public String contentType;
    public DeleteStyleGuideResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteStyleGuideResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public DeleteStyleGuideResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public DeleteStyleGuideResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}