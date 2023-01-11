package openapisdk.models.operations;



public class GetBatchJobProgressResponse {
    public String contentType;
    public GetBatchJobProgressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetBatchJobProgressResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetBatchJobProgressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}