package openapisdk.models.operations;



public class DeleteDatasetResponse {
    public String contentType;
    public DeleteDatasetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeletionResponse deletionResponse;
    public DeleteDatasetResponse withDeletionResponse(openapisdk.models.shared.DeletionResponse deletionResponse) {
        this.deletionResponse = deletionResponse;
        return this;
    }
    public Long statusCode;
    public DeleteDatasetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}