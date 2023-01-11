package openapisdk.models.operations;



public class DeleteCreditCardResponse {
    public String contentType;
    public DeleteCreditCardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteCreditCardResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public DeleteCreditCardResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public DeleteCreditCardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}