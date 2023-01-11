package openapisdk.models.operations;



public class UpdateUserPaymentInfoResponse {
    public String contentType;
    public UpdateUserPaymentInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateUserPaymentInfoResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public UpdateUserPaymentInfoResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public UpdateUserPaymentInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}