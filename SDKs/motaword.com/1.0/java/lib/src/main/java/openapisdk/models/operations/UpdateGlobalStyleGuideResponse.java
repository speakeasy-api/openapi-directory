package openapisdk.models.operations;



public class UpdateGlobalStyleGuideResponse {
    public String contentType;
    public UpdateGlobalStyleGuideResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateGlobalStyleGuideResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public UpdateGlobalStyleGuideResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public UpdateGlobalStyleGuideResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}