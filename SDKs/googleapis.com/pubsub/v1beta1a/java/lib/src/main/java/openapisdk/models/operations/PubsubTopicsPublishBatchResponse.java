package openapisdk.models.operations;



public class PubsubTopicsPublishBatchResponse {
    public String contentType;
    public PubsubTopicsPublishBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublishBatchResponse publishBatchResponse;
    public PubsubTopicsPublishBatchResponse withPublishBatchResponse(openapisdk.models.shared.PublishBatchResponse publishBatchResponse) {
        this.publishBatchResponse = publishBatchResponse;
        return this;
    }
    public Long statusCode;
    public PubsubTopicsPublishBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}