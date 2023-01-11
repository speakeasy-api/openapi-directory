package openapisdk.models.operations;



public class DeleteModelResponse {
    public String contentType;
    public DeleteModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeletionResponse deletionResponse;
    public DeleteModelResponse withDeletionResponse(openapisdk.models.shared.DeletionResponse deletionResponse) {
        this.deletionResponse = deletionResponse;
        return this;
    }
    public Long statusCode;
    public DeleteModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}