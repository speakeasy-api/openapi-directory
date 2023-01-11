package openapisdk.models.operations;



public class ReindexDocumentsResponse {
    public openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus;
    public ReindexDocumentsResponse withAsyncOperationStatus(openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus) {
        this.asyncOperationStatus = asyncOperationStatus;
        return this;
    }
    public String contentType;
    public ReindexDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReindexDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}