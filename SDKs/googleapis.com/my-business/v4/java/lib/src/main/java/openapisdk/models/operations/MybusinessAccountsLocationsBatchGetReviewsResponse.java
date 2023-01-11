package openapisdk.models.operations;



public class MybusinessAccountsLocationsBatchGetReviewsResponse {
    public openapisdk.models.shared.BatchGetReviewsResponse batchGetReviewsResponse;
    public MybusinessAccountsLocationsBatchGetReviewsResponse withBatchGetReviewsResponse(openapisdk.models.shared.BatchGetReviewsResponse batchGetReviewsResponse) {
        this.batchGetReviewsResponse = batchGetReviewsResponse;
        return this;
    }
    public String contentType;
    public MybusinessAccountsLocationsBatchGetReviewsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsBatchGetReviewsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}