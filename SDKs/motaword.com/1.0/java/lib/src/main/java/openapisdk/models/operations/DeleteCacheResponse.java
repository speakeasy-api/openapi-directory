package openapisdk.models.operations;



public class DeleteCacheResponse {
    public String contentType;
    public DeleteCacheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public DeleteCacheResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public DeleteCacheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}