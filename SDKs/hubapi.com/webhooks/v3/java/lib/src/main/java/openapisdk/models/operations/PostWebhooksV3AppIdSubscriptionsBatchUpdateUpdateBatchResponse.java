package openapisdk.models.operations;



public class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse {
    public openapisdk.models.shared.BatchResponseSubscriptionResponse batchResponseSubscriptionResponse;
    public PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse withBatchResponseSubscriptionResponse(openapisdk.models.shared.BatchResponseSubscriptionResponse batchResponseSubscriptionResponse) {
        this.batchResponseSubscriptionResponse = batchResponseSubscriptionResponse;
        return this;
    }
    public openapisdk.models.shared.BatchResponseSubscriptionResponseWithErrors batchResponseSubscriptionResponseWithErrors;
    public PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse withBatchResponseSubscriptionResponseWithErrors(openapisdk.models.shared.BatchResponseSubscriptionResponseWithErrors batchResponseSubscriptionResponseWithErrors) {
        this.batchResponseSubscriptionResponseWithErrors = batchResponseSubscriptionResponseWithErrors;
        return this;
    }
    public byte[] body;
    public PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}