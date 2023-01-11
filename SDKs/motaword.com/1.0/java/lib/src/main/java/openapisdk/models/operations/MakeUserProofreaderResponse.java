package openapisdk.models.operations;



public class MakeUserProofreaderResponse {
    public String contentType;
    public MakeUserProofreaderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public MakeUserProofreaderResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public MakeUserProofreaderResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public MakeUserProofreaderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}