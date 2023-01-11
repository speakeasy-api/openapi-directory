package openapisdk.models.operations;



public class DeleteBatchJobResponse {
    public String contentType;
    public DeleteBatchJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteBatchJobResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteBatchJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}