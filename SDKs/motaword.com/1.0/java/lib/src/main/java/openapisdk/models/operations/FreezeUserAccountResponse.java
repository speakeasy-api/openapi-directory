package openapisdk.models.operations;



public class FreezeUserAccountResponse {
    public String contentType;
    public FreezeUserAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public FreezeUserAccountResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public FreezeUserAccountResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public FreezeUserAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}