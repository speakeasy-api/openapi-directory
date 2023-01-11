package openapisdk.models.operations;



public class PostNewBatchJobResponse {
    public String contentType;
    public PostNewBatchJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PostNewBatchJobResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Link link;
    public PostNewBatchJobResponse withLink(openapisdk.models.shared.Link link) {
        this.link = link;
        return this;
    }
    public Long statusCode;
    public PostNewBatchJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}