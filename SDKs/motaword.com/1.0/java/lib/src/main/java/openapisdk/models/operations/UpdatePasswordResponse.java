package openapisdk.models.operations;



public class UpdatePasswordResponse {
    public String contentType;
    public UpdatePasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdatePasswordResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public UpdatePasswordResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public UpdatePasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}