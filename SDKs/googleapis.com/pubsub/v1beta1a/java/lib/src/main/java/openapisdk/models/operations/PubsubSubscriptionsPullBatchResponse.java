package openapisdk.models.operations;



public class PubsubSubscriptionsPullBatchResponse {
    public String contentType;
    public PubsubSubscriptionsPullBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PullBatchResponse pullBatchResponse;
    public PubsubSubscriptionsPullBatchResponse withPullBatchResponse(openapisdk.models.shared.PullBatchResponse pullBatchResponse) {
        this.pullBatchResponse = pullBatchResponse;
        return this;
    }
    public Long statusCode;
    public PubsubSubscriptionsPullBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}