package openapisdk.models.operations;



public class UseAsDraftResponse {
    public String contentType;
    public UseAsDraftResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public UseAsDraftResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public UseAsDraftResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}