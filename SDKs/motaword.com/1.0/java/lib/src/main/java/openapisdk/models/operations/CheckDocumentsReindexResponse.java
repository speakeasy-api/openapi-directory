package openapisdk.models.operations;



public class CheckDocumentsReindexResponse {
    public openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus;
    public CheckDocumentsReindexResponse withAsyncOperationStatus(openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus) {
        this.asyncOperationStatus = asyncOperationStatus;
        return this;
    }
    public String contentType;
    public CheckDocumentsReindexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckDocumentsReindexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}