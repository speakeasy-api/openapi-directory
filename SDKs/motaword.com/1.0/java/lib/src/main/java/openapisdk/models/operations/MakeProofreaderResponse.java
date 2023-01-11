package openapisdk.models.operations;



public class MakeProofreaderResponse {
    public String contentType;
    public MakeProofreaderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public MakeProofreaderResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public MakeProofreaderResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public MakeProofreaderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}